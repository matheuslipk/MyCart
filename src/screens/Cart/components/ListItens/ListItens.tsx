import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { numberToPriceString } from '../../../../utils/prices';
import ItemListCart from '../ItemListCart/ItemListCart';
import styles from '../ItemListCart/styles';
import IStateGlobal from '../../../../interfaces/IStateGlobal';

type Props = {
  cartId: number;
}

const ListItens = ({ cartId }:Props) => {
  const itensCart = useSelector((state:IStateGlobal) => state.itens_of_cart[cartId]);
  const total = 0;
  return (
    <View>
      {
        itensCart && Object.values(itensCart).map((i) => (
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
