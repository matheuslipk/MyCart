import { StackNavigationProp } from '@react-navigation/stack';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet, Text, TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import { IMainStackParamList } from '../../routes/interfaces';
import List from './List/List';
import { Creators } from '../../store/ducks/carts';
import IItemCart from '../../interfaces/models/IItemCart';
import { colors } from '../../utils/constants';

type ListCartsProp = StackNavigationProp<IMainStackParamList, 'ListCarts'>
type Props = {
  navigation: ListCartsProp;
}

const ListCarts = ({ navigation }:Props) => {
  const dispatch = useDispatch();
  const handleNewCart = () => {
    const newCart = {
      id: Date.now(),
      name: 'Novo Carrinho',
    } as IItemCart;
    dispatch(Creators.addCart(newCart));
  };

  React.useEffect(() => {
    navigation.setOptions({
      title: 'Carrinhos',
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <List navigation={navigation} />
        <TouchableOpacity onPress={handleNewCart} style={styles.btnNewCart}>
          <Text style={{ color: colors.primary }}>Criar Carrinho</Text>
          <Icon type="ionicon" name="ios-cart" style={styles.icon} size={30} color={colors.primary} />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 5 },
  btnNewCart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 5,
    flexDirection: 'row',
  },
  icon: {
    marginLeft: 5,
  },
});

export default ListCarts;
