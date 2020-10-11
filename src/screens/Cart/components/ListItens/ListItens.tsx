import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import IStateGlobal from '../../../../interfaces/IStateGlobal';
import ItemListCart from '../ItemListCart/ItemListCart';

// import { Container } from './styles';

const ListItens: React.FC = () => {
  const { cart } = useSelector((state:IStateGlobal) => state);
  return (
    <View>
      {
        Object.values(cart.itens).map((i) => (
          <ItemListCart key={i.id} item={i} />
        ))
      }
    </View>
  );
};

export default ListItens;
