import React from 'react';
import { Modal as ModalRN, SafeAreaView } from 'react-native';

type Props = {
  children: React.ReactChild
}

const Modal = ({ children }:Props) => (
  <ModalRN>
    <SafeAreaView style={{ flex: 1 }}>
      {children}
    </SafeAreaView>
  </ModalRN>

);

export default Modal;
