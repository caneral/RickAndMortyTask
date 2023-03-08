import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '@screens/HomeScreen/index';
import EpisodeScreen from '@screens/EpisodeScreen/index';
import FavoriteScreen from '@screens/FavoriteScreen/index';
import CharacterScreen from '@screens/CharacterScreen/index';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Episode" component={EpisodeScreen} />
        <Stack.Screen name="Favorite" component={FavoriteScreen} />
        <Stack.Screen name="Character" component={CharacterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
