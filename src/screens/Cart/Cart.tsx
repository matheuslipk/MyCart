import { StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { IMainStackParamList } from '../../routes/interfaces';
import { Creators as ComponentsCreators } from '../../store/ducks/components';
import ListItens from './components/ListItens/ListItens';
import ModalNewItem from './components/ModalNewItem/ModalNewItem';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';

type CartProp = StackScreenProps<IMainStackParamList, 'Cart'>

const Cart = ({ route }:CartProp) => {
  const cartId = route.params.id;
  const dispatch = useDispatch();

  const showModalNewItem = () => {
    dispatch(ComponentsCreators.setModalNewItemVisible(true));
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ListItens cartId={cartId} />
        <ButtonPrimary
          onPress={showModalNewItem}
          text="Novo item"
          style={{ marginTop: 10, marginHorizontal: 4 }}
        />
      </ScrollView>
      <ModalNewItem cartId={cartId} />
    </SafeAreaView>
  );
};
export default Cart;
