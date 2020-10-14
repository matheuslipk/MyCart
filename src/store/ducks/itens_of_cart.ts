import produce from 'immer';
import { createActions, createReducer } from 'reduxsauce';
import IItemCart from '../../interfaces/models/IItemCart';
import IItensOfCart from '../../interfaces/models/ItensOfCard';

const INITIAL_STATE:IItensOfCart = {};

export const { Types, Creators } = createActions({
  addItem: ['cartId', 'item'],
}, {
  prefix: '@itens_of_cart/',
});

const addItem = (state = INITIAL_STATE, action:actionAddItem) => produce(state, (draft) => {
  if (!draft[action.cartId]) draft[action.cartId] = {};
  draft[action.cartId][action.item.id] = action.item;
}) as IItensOfCart;

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
});

type actionAddItem = {
  cartId: number;
  item:IItemCart,
}
