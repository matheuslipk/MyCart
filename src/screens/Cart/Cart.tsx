import * as React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { Creators as ComponentsCreators } from '../../store/ducks/components';
import ListItens from './components/ListItens/ListItens';
import ModalNewItem from './components/ModalNewItem/ModalNewItem';
import ButtonPrimary from '../../components/ButtonPrimary/ButtonPrimary';

const Cart = () => {
  const dispatch = useDispatch();

  const showModalNewItem = () => {
    dispatch(ComponentsCreators.setModalNewItemVisible(true));
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <ListItens />
        <ButtonPrimary
          onPress={showModalNewItem}
          text="Novo item"
          style={{ marginTop: 10, marginHorizontal: 4 }}
        />
      </ScrollView>
      <ModalNewItem />
    </SafeAreaView>
  );
};

export default Cart;
