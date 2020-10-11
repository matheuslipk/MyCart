import React from 'react';
import { Text, View } from 'react-native';
import IItemCArt from '../../interfaces/IItemCart';
import styles from './styles';

type PropsItemList = {
  item: IItemCArt,
}

const ItemListCart = (props: PropsItemList) => {
  const { item } = props;
  const priceFormated = (price:number) => (price ? `R$ ${price.toFixed(2)}` : 'R$ 0,00');

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>Produto</Text>
        <Text>{item.name}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>Valor Unit</Text>
        <Text>{priceFormated(item.unitePrice)}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>Quant</Text>
        <Text>{item.amount || 0}</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.textName}>Preço final</Text>
        <Text>{priceFormated(item.unitePrice * item.amount)}</Text>
      </View>
    </View>
  );
};

export default ItemListCart;
