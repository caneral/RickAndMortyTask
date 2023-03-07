import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getEpisodes} from '@features/episodeSlice';
import {useSelector, useDispatch} from 'react-redux';

const HomeScreen = () => {
  const {episodes} = useSelector(state => state.episode);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodes(1));
  }, [dispatch]);

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
