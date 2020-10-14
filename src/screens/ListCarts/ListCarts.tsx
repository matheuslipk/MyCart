import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { IMainStackParamList } from '../../routes/interfaces';

type ListCartsProp = StackNavigationProp<IMainStackParamList, 'ListCarts'>
type Props = {
  navigation: ListCartsProp;
}

const ListCarts = ({ navigation }:Props) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate('Cart', { id: 1 })}>
      <Text>Lista vazia</Text>
    </TouchableOpacity>
  </View>
);

export default ListCarts;
