/* eslint no-unused-vars:0 */
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import styles from './styles';

interface Props {
  label?: string;
  placeholder?: string;
  value: string;
  onChangeText: (text:string) => void;
  keyboardType?: 'numeric'| undefined
}

const Input = (props:Props) => {
  const {
    label, placeholder, value, onChangeText, keyboardType,
  } = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textLabel}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Input;
