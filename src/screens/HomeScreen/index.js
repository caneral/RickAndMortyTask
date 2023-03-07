import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getEpisodes} from '@features/episodeSlice';
import {useSelector, useDispatch} from 'react-redux';
import EpisodeCard from './components/EpisodeCard/index';
import {COLORS} from '@constants/theme';
import Pagination from '@components/Pagination/Pagination';

const HomeScreen = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const {episodes} = useSelector(state => state.episode);
  const {data} = Object(episodes);
  const {results, info} = Object(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes(pageNumber));
  }, [dispatch, pageNumber]);

  const keyExtractor = item => item.id.toString();
  const renderItem = ({item}) => <EpisodeCard data={item} />;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <FlatList
          data={results}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.list}
        />
        <Pagination
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          info={info}
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
});
