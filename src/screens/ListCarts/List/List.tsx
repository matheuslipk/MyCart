import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ICart from '../../../interfaces/models/ICart';
import { IMainStackParamList } from '../../../routes/interfaces';
import * as selectorsCart from '../../../store/selectors/carts';
import { colors } from '../../../utils/constants';
import { Creators as CartCreators } from '../../../store/ducks/carts';

type ListCartsProp = StackNavigationProp<IMainStackParamList, 'ListCarts'>
type Props = {
  navigation: ListCartsProp;
}

const ListCarts = ({ navigation }:Props) => {
  const carts = useSelector(selectorsCart.arrayCarts) as ICart[];
  const dispatch = useDispatch();

  const handleDeleteCart = (cartId:number) => {
    dispatch(CartCreators.removeCart(cartId));
  };

  return (
    <View>
      {
        carts.map((c) => (
          <TouchableOpacity
            style={styles.btn}
            key={c.id}
            onPress={() => navigation.navigate('Cart', { id: c.id })}
            onLongPress={() => handleDeleteCart(c.id)}
          >
            <Text>{c.name}</Text>
          </TouchableOpacity>
        ))
      }

    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    padding: 5,
    marginTop: 3,
  },
});
export default ListCarts;
