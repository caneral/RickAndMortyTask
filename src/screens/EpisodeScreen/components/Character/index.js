import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS} from '@constants/theme';

const Character = ({data}) => {
  const {id, name, status, species, type, gender, origin, location, image} =
    data;
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
});
