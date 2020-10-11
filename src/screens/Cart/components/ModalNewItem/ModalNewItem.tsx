import React from 'react';
import {
  Text, TouchableOpacity, View, TextInput,
} from 'react-native';
import { useDispatch } from 'react-redux';
import Modal from '../../../../components/Modal/Modal';
import styles from './styles';
import { Creators as CartCreators } from '../../../../store/ducks/cart';

type Props = {
  close: ()=>void,
}

const ModalNewItem = ({ close }:Props) => {
  const dispatch = useDispatch();

  const handleNewItem = () => {
    dispatch(CartCreators.addItem({
      id: 20,
      name: 'Prod',
    }));
    close();
  };
  return (
    <Modal>
      <View style={styles.container}>
        <View style={{ marginBottom: 20 }}>
          <TouchableOpacity onPress={close}>
            <Text>Voltar</Text>
          </TouchableOpacity>
        </View>
        <TextInput placeholder="Produto" />
        <TextInput placeholder="Preco unitato" />
        <TextInput placeholder="Quantidade" />

        <TouchableOpacity onPress={handleNewItem}>
          <Text>Add</Text>
        </TouchableOpacity>

      </View>
    </Modal>
  );
};

export default ModalNewItem;
