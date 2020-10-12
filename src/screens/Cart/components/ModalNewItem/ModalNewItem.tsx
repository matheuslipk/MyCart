import React from 'react';
import {
  Text, TouchableOpacity, View, TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../../../components/Modal/Modal';
import styles from './styles';
import { Creators as CartCreators } from '../../../../store/ducks/cart';
import IStateGlobal from '../../../../interfaces/IStateGlobal';
import IItemCart from '../../../../interfaces/IItemCart';

import { Creators as ComponentsCreators } from '../../../../store/ducks/components';

const ModalNewItem = () => {
  const dispatch = useDispatch();
  const { components } = useSelector((state:IStateGlobal) => state);
  const [name, setName] = React.useState('');
  const [unitPrice, setUnitPrice] = React.useState('');
  const [amount, setAmount] = React.useState('');

  const clearInputs = () => {
    setName('');
    setUnitPrice('');
    setAmount('');
  };

  const handleNewItem = () => {
    dispatch(CartCreators.addItem({
      id: Date.now(),
      name,
      unitPrice: Number.parseFloat(unitPrice),
      amount: Number.parseFloat(amount),
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
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity onPress={hideModalNewItem}>
            <Text>Voltar</Text>
          </TouchableOpacity>
        </View>
        <TextInput
          placeholder="Produto"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Preco unitato"
          style={styles.input}
          value={unitPrice}
          onChangeText={setUnitPrice}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Quantidade"
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
        <TouchableOpacity onPress={handleNewItem} style={styles.btnAdd}>
          <Text style={styles.textBtn}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  ) : null;
};

export default ModalNewItem;
