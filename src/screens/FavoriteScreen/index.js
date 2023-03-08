import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import {COLORS} from '@constants/theme';
import Pagination from '@components/Pagination/Pagination';
import Character from '@components/Character/index';

const FavoriteScreen = ({navigation}) => {
  const [pageNumber, setPageNumber] = useState(1);
  const postPerPage = 5;

  const {favorites} = useSelector(state => state.character);
  const {data} = Object(favorites);

  const indexOfLastCharacter = pageNumber * postPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - postPerPage;

  const currentCharacters = data?.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter,
  );

  useEffect(() => {
    navigation.setOptions({
      title: 'Favori Karakterlerim',
    });
  }, [navigation]);

  const keyExtractor = item => item.id.toString();
  const renderItem = ({item}) => (
    <Character data={item} navigation={navigation} />
  );
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.episodeInfo}>
          <Text style={styles.episodeText}>{data?.episode}</Text>
          <Text style={styles.nameText}>{data?.name}</Text>
        </View>
        <FlatList
          data={currentCharacters}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
        <Pagination
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          pageCount={data?.length / postPerPage}
        />
      </View>
    </SafeAreaView>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    paddingVertical: 16,
  },
  episodeInfo: {
    margin: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  episodeText: {
    color: COLORS.black,
    fontSize: 32,
    fontWeight: '800',
  },
  nameText: {
    color: COLORS.black,
    fontSize: 20,
  },
  list: {
    marginBottom: 32,
  },
});
