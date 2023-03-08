import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getEpisodes} from '@features/episodeSlice';
import {useSelector, useDispatch} from 'react-redux';
import EpisodeCard from './components/EpisodeCard/index';
import {COLORS} from '@constants/theme';
import Pagination from '@components/Pagination/Pagination';

const HomeScreen = ({navigation}) => {
  const [pageNumber, setPageNumber] = useState(1);

  const {episodes} = useSelector(state => state.episode);
  const {data} = Object(episodes);
  const {results, info} = Object(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes(pageNumber));
  }, [dispatch, pageNumber]);

  const keyExtractor = item => item.id.toString();
  const renderItem = ({item}) => (
    <EpisodeCard data={item} navigation={navigation} />
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View>
          <Text style={styles.headerText}>Hoşgeldiniz</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorite')}
          style={styles.favoriteButton}>
          <Text style={styles.favoriteText}>Favorilerim</Text>
        </TouchableOpacity>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
        <Pagination
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          pageCount={info?.pages}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  list: {
    marginBottom: 32,
  },
  container: {
    flex: 1,
    padding: 16,
    position: 'relative',
  },
  headerText: {
    fontSize: 28,
    fontWeight: '600',
  },
  favoriteButton: {
    backgroundColor: COLORS.red600,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: 4,
    borderRadius: 16,
    marginVertical: 12,
  },
  favoriteText: {
    color: COLORS.white,
  },
});
