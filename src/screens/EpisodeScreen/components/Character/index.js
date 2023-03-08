import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/theme';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {setToFavorite} from '@features/characterSlice';

const Character = ({data}) => {
  const dispatch = useDispatch();
  const {favorites} = useSelector(state => state.character);
  const {id, name, status, location, image} = data;

  const isFavorite = favorites.data?.some(c => c.id === id);

  const setFavorite = () => {
    dispatch(setToFavorite(data));
  };

  return (
    <View style={styles.container}>
      <Image
        source={{uri: image}}
        style={styles.characterImage}
        resizeMode="cover"
      />
      <View
        style={[
          styles.status,
          status === 'Alive' ? styles.activeStatus : styles.passiveStatus,
        ]}>
        <Text style={styles.statusText}>{status}</Text>
      </View>
      <TouchableOpacity onPress={setFavorite} style={[styles.favorite]}>
        <AntDesignIcon
          name="heart"
          color={isFavorite ? COLORS.red600 : COLORS.white}
          size={32}
          style={styles.heart}
        />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>{name}</Text>
        <Text style={styles.location}>Location</Text>
        <Text style={styles.locationName}>{location.name}</Text>
      </View>
    </View>
  );
};

export default Character;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    margin: 16,
    borderRadius: 12,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  characterImage: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
  },
  header: {
    padding: 8,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  activeStatus: {
    backgroundColor: COLORS.green400,
  },
  passiveStatus: {
    backgroundColor: COLORS.red600,
  },
  status: {
    position: 'absolute',
    top: 12,
    left: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 20,
    color: COLORS.white,
  },
  location: {
    fontSize: 18,
    fontWeight: '400',
    color: COLORS.gray,
  },
  locationName: {
    fontSize: 20,
    fontWeight: '400',
  },
  favorite: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  heart: {
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
