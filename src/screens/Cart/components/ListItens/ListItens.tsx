import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import IStateGlobal from '../../../../interfaces/IStateGlobal';
import { numberToPriceString } from '../../../../utils/prices';
import ItemListCart from '../ItemListCart/ItemListCart';
import styles from '../ItemListCart/styles';

// import { Container } from './styles';

const ListItens: React.FC = () => {
  const cart = useSelector((state:IStateGlobal) => state.cart);

  const arrayItens = Object.values(cart.itens);
  const total = arrayItens.reduce((acum, atual) => acum + atual.unitPrice * atual.amount, 0);
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
