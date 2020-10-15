import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import {
  Alert,
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from 'react-native-elements';
import ICart from '../../../interfaces/models/ICart';
import { IMainStackParamList } from '../../../routes/interfaces';
import * as selectorsCart from '../../../store/selectors/carts';
import { colors } from '../../../utils/constants';
import { Creators as CartCreators } from '../../../store/ducks/carts';

type ListCartsProp = StackNavigationProp<IMainStackParamList, 'ListCarts'>
type PropsItem = {
  navigation: ListCartsProp;
  cart:ICart;
}

const colorIcon = '#fff';

const ItemList = ({ navigation, cart }:PropsItem) => {
  const [editable, setEditable] = React.useState(false);
  const [nameCart, setNameCart] = React.useState(cart.name);

  const dispatch = useDispatch();
  const handleDeleteCart = (cartId:number) => {
    const deleteCart = () => dispatch(CartCreators.removeCart(cartId));
    Alert.alert('Apagar Carrinho?', 'Esse carrinho será excluido e todos os'
    + ' itens dentro dele serão perdidos. Deseja mesmo fazer isso?', [
      { text: 'Sim', onPress: deleteCart },
      { text: 'Não' },
    ]);
  };

  const handleEditCart = () => {
    dispatch(CartCreators.edit({
      ...cart,
      name: nameCart,
    }));
    setEditable(false);
  };

  return editable ? (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Carrinho"
        value={nameCart}
        onChangeText={setNameCart}
      />
      <TouchableOpacity onPress={() => setEditable(false)}>
        <Icon type="antdesign" name="back" size={30} color={colorIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleEditCart}>
        <Icon type="entypo" name="save" size={30} color={colorIcon} />
      </TouchableOpacity>
    </View>
  ) : (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        key={cart.id}
        onPress={() => navigation.navigate('Cart', { id: cart.id })}
        onLongPress={() => handleDeleteCart(cart.id)}
      >
        <Text style={{ color: colorIcon }}>{cart.name}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setEditable(true)}>
        <Icon type="entypo" name="pencil" size={30} color={colorIcon} />
      </TouchableOpacity>
    </View>

  );
};

type PropsList = {
  navigation: ListCartsProp;
}

const ListCarts = ({ navigation }:PropsList) => {
  const carts = useSelector(selectorsCart.arrayCarts) as ICart[];

  return (
    <View>
      {carts.map((c) => <ItemList key={c.id} cart={c} navigation={navigation} />) }
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    marginTop: 5,
    padding: 4,
  },
  input: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    borderRadius: 4,
    color: colors.primary,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: 5,
  },
});
export default ListCarts;
