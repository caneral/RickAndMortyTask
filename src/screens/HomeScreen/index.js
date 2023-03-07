import {FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {getEpisodes} from '@features/episodeSlice';
import {useSelector, useDispatch} from 'react-redux';
import EpisodeCard from './components/EpisodeCard/index';
import {COLORS} from '@constants/theme';

const HomeScreen = () => {
  const {episodes} = useSelector(state => state.episode);
  const {data} = Object(episodes);
  const {results} = Object(data);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes(1));
  }, [dispatch]);

  const keyExtractor = item => item.id.toString();
  const renderItem = ({item}) => <EpisodeCard data={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={results}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.white,
  },
});
