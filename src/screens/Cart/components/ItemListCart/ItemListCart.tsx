import React from 'react';
import {
  Text, View, TouchableOpacity, Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import IItemCArt from '../../../../interfaces/models/IItemCart';
import styles from './styles';
import { Creators as CurrentItemCreators } from '../../../../store/ducks/current_item';
import { Creators as ComponentsCreators } from '../../../../store/ducks/components';
import { Creators as ItensOfCartCreators } from '../../../../store/ducks/itens_of_cart';

type PropsItemList = {
  item: IItemCArt,
}

const ItemListCart = (props: PropsItemList) => {
  const { item } = props;
  const priceFormated = (price:number) => (price ? `R$ ${price.toFixed(2)}` : 'R$ 0,00');
  const dispatch = useDispatch();
  const showModalEditind = () => {
    dispatch(CurrentItemCreators.replace(item));
    dispatch(ComponentsCreators.setModalNewItemVisible(true));
  };

  const handleDeleteItem = () => {
    const deleteItem = () => {
      dispatch(ItensOfCartCreators.deleteItem(item));
    };
    Alert.alert('Atenção', 'Deseja apagar o item selecionado?', [
      { text: 'Sim', onPress: deleteItem },
      { text: 'Não' },
    ]);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={showModalEditind}
      onLongPress={handleDeleteItem}
    >
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>Produto</Text>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>Valor Unit</Text>
        <Text>{priceFormated(item.unitPrice)}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>Quant</Text>
        <Text>{item.amount || 0}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>Preço final</Text>
        <Text>{priceFormated(item.unitPrice * item.amount)}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemListCart;
