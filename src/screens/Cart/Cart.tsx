import * as React from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';
import { useDispatch } from 'react-redux';
import ButtonNewItem from './components/ButtonNewItem/ButtonNewItem';
import { Creators as CartCreators } from '../../store/ducks/cart';
import ListItens from './components/ListItens/ListItens';

const screens: React.FC = () => {
  const dispatch = useDispatch();
  const change = () => {
    dispatch(CartCreators.addItem({
      id: 21,
      name: 'new prod',
    }));
  };
  return (
    <SafeAreaView>
      <Text>Hello</Text>
      <ScrollView>
        <ListItens />
        <ButtonNewItem onPress={change} />
      </ScrollView>

    </SafeAreaView>
  );
};

export default screens;
