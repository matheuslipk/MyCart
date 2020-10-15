import { createSelector } from 'reselect';
import IStateGlobal from '../../interfaces/IStateGlobal';

const Carts = (state:IStateGlobal) => state.carts;

export const arrayCarts = createSelector(
  Carts,
  (carts) => Object.values(carts).reverse(),
);
