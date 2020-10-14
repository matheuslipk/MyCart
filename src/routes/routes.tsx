import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from '../screens';
import { ThemeDefault } from '../utils/constants';
import { IMainStackParamList } from './interfaces';

const Stack = createStackNavigator<IMainStackParamList>();

const MainStack = () => (
  <Stack.Navigator initialRouteName="ListCarts">
    <Stack.Screen name="Cart" component={Screens.Cart} />
    <Stack.Screen name="ListCarts" component={Screens.ListCarts} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer theme={ThemeDefault}>
    <MainStack />
  </NavigationContainer>
);
