import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

interface Props {
  onPress: () => void;
}

const ButtonNewItem = ({ onPress }:Props) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text>Novo Item</Text>
  </TouchableOpacity>
);

export default ButtonNewItem;
