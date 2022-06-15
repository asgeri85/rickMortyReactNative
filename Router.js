import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Episode from './src/pages/Episode';
import Character from './src/pages/Character';
import Detail from './src/pages/Detail';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="EpisodeScreen" component={Episode} />
        <Stack.Screen name="CharacterScreen" component={Character} />
        <Stack.Screen name="DetailScreen" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
