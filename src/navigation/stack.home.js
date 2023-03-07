import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '@screens/HomeScreen/index';
import EpisodeScreen from '@screens/EpisodeScreen/index';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Episode" component={EpisodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
