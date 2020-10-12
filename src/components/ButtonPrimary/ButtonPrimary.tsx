/* eslint react/require-default-props:0 */
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  text: string;
  onPress: () => void;
  style?: object;
}

const ButtonPrimary = (props:Props) => {
  const { text, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
      <Text style={styles.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ButtonPrimary;
