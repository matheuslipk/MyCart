import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screens from './screens';
import { ThemeDefault } from './utils/constants';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="cart" component={Screens.Cart} />
  </Stack.Navigator>
);

export default () => (
  <NavigationContainer theme={ThemeDefault}>
    <MainStack />
  </NavigationContainer>
);
