import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getEpisode} from '@features/episodeSlice';
import {getCharacters} from '@features/characterSlice';
import Character from './components/Character/index';
import {COLORS} from '@constants/theme';
import Pagination from '@components/Pagination/Pagination';

const EpisodeScreen = ({navigation, route}) => {
  const {params} = route;
  const {id} = params;

  const [pageNumber, setPageNumber] = useState(1);
  const postPerPage = 5;

  const {episode} = useSelector(state => state.episode);
  const {data} = Object(episode);

  const {characters} = useSelector(state => state.character);
  const {data: charactersData} = Object(characters);

  const indexOfLastCharacter = pageNumber * postPerPage;
  const indexOfFirstCharacter = indexOfLastCharacter - postPerPage;

  const currentCharacters = charactersData?.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter,
  );

  useEffect(() => {
    navigation.setOptions({
      title: data?.name,
    });
  }, [data, navigation]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisode(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (data !== null) {
      const charactersId = data.characters
        .map(character =>
          character.replace('https://rickandmortyapi.com/api/character/', ''),
        )
        .toString();
      dispatch(getCharacters(charactersId));
    }
  }, [dispatch, data]);

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
          pageCount={charactersData?.length / postPerPage}
        />
      </View>
    </SafeAreaView>
  );
};

export default EpisodeScreen;

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
