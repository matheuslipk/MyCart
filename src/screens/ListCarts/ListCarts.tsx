import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { IMainStackParamList } from '../../routes/interfaces';
import List from './List/List';
import { Creators } from '../../store/ducks/carts';
import IItemCart from '../../interfaces/models/IItemCart';

type ListCartsProp = StackNavigationProp<IMainStackParamList, 'ListCarts'>
type Props = {
  navigation: ListCartsProp;
}

const ListCarts = ({ navigation }:Props) => {
  const dispatch = useDispatch();
  const handleNewCart = () => {
    const newCart = {
      id: Date.now(),
      name: 'Novo',
    } as IItemCart;
    dispatch(Creators.addCart(newCart));
  };
  return (
    <View>
      <List navigation={navigation} />
      <TouchableOpacity onPress={handleNewCart}>
        <Text>Novo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListCarts;
