import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import ICart from '../../interfaces/models/ICart';
import { IMainStackParamList } from '../../routes/interfaces';
import * as selectorCarts from '../../store/selectors/carts';

type ListCartsProp = StackNavigationProp<IMainStackParamList, 'ListCarts'>
type Props = {
  navigation: ListCartsProp;
}

const ListCarts = ({ navigation }:Props) => {
  const carts = useSelector(selectorCarts.arrayCarts) as ICart[];

  return (
    <View>
      {
        carts.map((c) => (
          <TouchableOpacity key={c.id} onPress={() => navigation.navigate('Cart', { id: c.id })}>
            <Text>{c.name}</Text>
          </TouchableOpacity>
        ))
      }

    </View>
  );
};

export default ListCarts;
