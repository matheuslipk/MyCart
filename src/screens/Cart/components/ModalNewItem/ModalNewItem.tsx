import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../../components/Modal/Modal';
import styles from './styles';
import { Creators as ItensOfCardCreators } from '../../../../store/ducks/itens_of_cart';
import { Creators as CurrentItemCreators } from '../../../../store/ducks/current_item';
import IStateGlobal from '../../../../interfaces/IStateGlobal';
import IItemCart from '../../../../interfaces/models/IItemCart';

import { Creators as ComponentsCreators } from '../../../../store/ducks/components';
import ButtonPrimary from '../../../../components/ButtonPrimary/ButtonPrimary';
import { numberToPriceString, priceStringToNumber } from '../../../../utils/prices';
import Input from '../../../../components/Input/Input';

type Props = {
  cartId: number;
}

const ModalNewItem = ({ cartId }:Props) => {
  const dispatch = useDispatch();
  const current_item = useSelector((state:IStateGlobal) => state.current_item);
  const components = useSelector((state:IStateGlobal) => state.components);

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
    dispatch(ItensOfCardCreators.addItem(cartId, {
      id: current_item.id || Date.now(),
      cartId,
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
        <Input
          label="Produto"
          value={current_item.name}
          onChangeText={setName2}
        />
        <Input
          label="Preço unitário"
          value={numberToPriceString(current_item.unitPrice)}
          onChangeText={setUnitPrice2}
          keyboardType="numeric"
        />
        <Input
          placeholder="Quantidade"
          label="Quantidade"
          value={numberToPriceString(current_item.amount)}
          onChangeText={setAmount2}
          keyboardType="numeric"
        />
        <ButtonPrimary text="Salvar" onPress={handleNewItem} style={styles.btnAdd} />
      </View>
    </Modal>
  ) : null;
};

export default ModalNewItem;
