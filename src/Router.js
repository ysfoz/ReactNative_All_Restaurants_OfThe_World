// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { CityList, RestaurantList, InfoList } from './pages';



const Stack = createStackNavigator();

const Router=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CityList" component={CityList} />
        <Stack.Screen name="Restaurants" component={RestaurantList} />
        <Stack.Screen name="Infos" component={InfoList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;