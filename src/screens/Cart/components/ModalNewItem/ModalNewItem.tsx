import React from 'react';
import { View, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../../components/Modal/Modal';
import styles from './styles';
import { Creators as CartCreators } from '../../../../store/ducks/cart';
import { Creators as CurrentItemCreators } from '../../../../store/ducks/current_item';
import IStateGlobal from '../../../../interfaces/IStateGlobal';
import IItemCart from '../../../../interfaces/IItemCart';

import { Creators as ComponentsCreators } from '../../../../store/ducks/components';
import ButtonPrimary from '../../../../components/ButtonPrimary/ButtonPrimary';
import { numberToPriceString, priceStringToNumber } from '../../../../utils/prices';

const ModalNewItem = () => {
  const dispatch = useDispatch();
  const { components, current_item } = useSelector((state:IStateGlobal) => state);

  const setName2 = (t:string) => dispatch(CurrentItemCreators.setName(t));
  const setUnitPrice2 = (t:string) => {
    const number = priceStringToNumber(t);
    dispatch(CurrentItemCreators.setUnitPrice(number));
  };
  const setAmount2 = (t:string) => {
    const number = priceStringToNumber(t);
    dispatch(CurrentItemCreators.setAmount(number));
  };

  const clearInputs = () => dispatch(CurrentItemCreators.clear());

  const handleNewItem = () => {
    dispatch(CartCreators.addItem({
      id: current_item.id || Date.now(),
      name: current_item.name,
      unitPrice: current_item.unitPrice,
      amount: current_item.amount,
    } as IItemCart));
    clearInputs();
    hideModalNewItem();
  };

  const hideModalNewItem = () => {
    dispatch(ComponentsCreators.setModalNewItemVisible(false));
  };

  return components.modalNewItemVisible ? (
    <Modal>
      <View style={styles.container}>
        <TextInput
          placeholder="Produto"
          style={styles.input}
          value={current_item.name}
          onChangeText={setName2}
        />
        <TextInput
          placeholder="Preco unitato"
          style={styles.input}
          value={numberToPriceString(current_item.unitPrice)}
          onChangeText={setUnitPrice2}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Quantidade"
          style={styles.input}
          value={numberToPriceString(current_item.amount)}
          onChangeText={setAmount2}
          keyboardType="numeric"
        />
        <ButtonPrimary text="Adicionar" onPress={handleNewItem} style={styles.btnAdd} />
      </View>
    </Modal>
  ) : null;
};

export default ModalNewItem;
