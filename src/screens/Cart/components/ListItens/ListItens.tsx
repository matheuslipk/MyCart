import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { numberToPriceString } from '../../../../utils/prices';
import ItemListCart from '../ItemListCart/ItemListCart';
import styles from '../ItemListCart/styles';
import * as selectorCart from '../../../../store/selectors/carts';

const ListItens: React.FC = () => {
  const total = useSelector(selectorCart.totalCart);
  const arrayItens = useSelector(selectorCart.arrayItensCart);

  return (
    <View>
      {
        arrayItens.map((i) => (
          <ItemListCart key={i.id} item={i} />
        ))
      }
      <View style={styles.viewTotal}>
        <Text>Total R$</Text>
        <Text>{`R$ ${numberToPriceString(total)}`}</Text>
      </View>
    </View>
  );
};

export default ListItens;
