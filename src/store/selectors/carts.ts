import { createSelector } from 'reselect';
import IStateGlobal from '../../interfaces/IStateGlobal';

const itensCart = (state:IStateGlobal) => state.cart.itens;

export const arrayItensCart = createSelector(
  itensCart,
  (itens) => Object.values(itens),
);

export const totalCart = createSelector(
  arrayItensCart,
  (itens) => itens.reduce((acum, atual) => acum + atual.unitPrice * atual.amount, 0),
);
