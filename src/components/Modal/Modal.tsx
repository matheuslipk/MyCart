import React from 'react';
import {
  Modal as ModalRN, SafeAreaView, View, Text, TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { Creators as ComponentsCreators } from '../../store/ducks/components';
import { Creators as CurrentItemCreators } from '../../store/ducks/current_item';

type Props = {
  children: React.ReactChild
}

const Modal = ({ children }:Props) => {
  const dispatch = useDispatch();

  const clearInputs = () => dispatch(CurrentItemCreators.clear());

  const hideModalNewItem = () => {
    dispatch(ComponentsCreators.setModalNewItemVisible(false));
    clearInputs();
  };
  return (
    <ModalRN transparent>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={hideModalNewItem} style={styles.btnBack}>
            <Icon type="ionicon" name="ios-arrow-back" color="#fff" />
            <Text style={styles.textHeader}>Voltar</Text>
          </TouchableOpacity>
        </View>
        {children}
      </SafeAreaView>
    </ModalRN>

  );
};

export default Modal;
