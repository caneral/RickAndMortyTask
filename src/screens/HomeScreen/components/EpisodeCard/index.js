import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/theme';

const EpisodeCard = ({data}) => {
  const {name, air_date, episode} = data;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.episode}>{episode}</Text>
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
      <Text style={styles.date}>{air_date}</Text>
    </TouchableOpacity>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.green,
    height: 100,
    marginVertical: 8,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  episode: {
    fontSize: 22,
    fontWeight: '600',
    color: COLORS.white,
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.brown,
    marginBottom: 4,
  },
  date: {
    fontSize: 16,
    fontWeight: '400',
    color: COLORS.gray,
  },
});
