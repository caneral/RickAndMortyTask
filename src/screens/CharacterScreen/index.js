import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import {COLORS} from '@constants/theme';

const CharacterScreen = ({navigation, route}) => {
  const {params} = route;
  const {data} = params;
  const {image, name, status, species, gender, location, origin, episode} =
    data;

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  }, [name, navigation]);

  const keyExtractor = item =>
    item.replace('https://rickandmortyapi.com/api/episode/', '');

  const renderItem = ({item}) => (
    <View style={styles.episode}>
      <Text style={styles.episodeText}>
        {item.replace('https://rickandmortyapi.com/api/episode/', 'Episode: ')}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            source={{uri: image}}
            style={styles.characterImage}
            resizeMode="cover"
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.headerText}>{name}</Text>
          <View style={styles.location}>
            <Text style={styles.headerSubText}>{location.name}</Text>
            <Text numberOfLines={1} style={styles.headerSubText}>
              - {origin.name}
            </Text>
          </View>
        </View>
        <View style={styles.properties}>
          <View style={styles.property}>
            <Text style={styles.propertyText}>{status}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyText}>{species}</Text>
          </View>
          <View style={styles.property}>
            <Text style={styles.propertyText}>{gender}</Text>
          </View>
        </View>
        <View style={styles.episodes}>
          <Text style={styles.episodesHeader}>Episodes</Text>
          <FlatList
            numColumns={3}
            data={episode}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            style={styles.list}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CharacterScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.neutral900,
  },
  container: {
    flex: 1,
  },
  imageWrapper: {
    flex: 1 / 2,
    margin: 12,
    borderRadius: 24,
  },
  characterImage: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
  properties: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 12,
  },
  header: {
    marginVertical: 6,
    display: 'flex',
    alignItems: 'center',
  },
  headerText: {
    color: COLORS.white,
    fontSize: 26,
    fontWeight: 'bold',
  },
  headerSubText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '400',
  },
  property: {
    borderWidth: 2,
    borderColor: COLORS.red600,
    borderRadius: 16,
    marginHorizontal: 12,
  },
  propertyText: {
    color: COLORS.white,
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 2,
  },
  location: {
    flexDirection: 'row',
    gap: 8,
  },
  episodes: {
    marginHorizontal: 16,
    flex: 1 / 2,
  },
  episodesHeader: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  list: {
    marginBottom: 32,
    marginHorizontal: 16,
  },
  episodeText: {
    fontSize: 16,
  },
  episode: {
    flex: 1 / 3,
    marginHorizontal: 4,
    marginVertical: 4,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    borderRadius: 4,
  },
});
