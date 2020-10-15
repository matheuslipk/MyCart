import produce from 'immer';
import { createActions, createReducer } from 'reduxsauce';
import IItemCart from '../../interfaces/models/IItemCart';
import IItensOfCart from '../../interfaces/models/ItensOfCard';

const INITIAL_STATE:IItensOfCart = {};

export const { Types, Creators } = createActions({
  addItem: ['cartId', 'item'],
  deleteItem: ['item'],
  deleteItensByCart: ['cartId'],
  replace: ['itensOfCart'],
}, {
  prefix: '@itens_of_cart/',
});

const addItem = (state = INITIAL_STATE, action:actionAddItem) => produce(state, (draft) => {
  if (!draft[action.cartId]) draft[action.cartId] = {};
  draft[action.cartId][action.item.id] = action.item;
}) as IItensOfCart;

const deleteItem = (state = INITIAL_STATE, action:actionDeleteItem) => produce(state, (draft) => {
  delete draft[action.item.cartId][action.item.id];
}) as IItensOfCart;

const deleteItensByCart = (
  state = INITIAL_STATE,
  action:actionDeleteItensByCart,
) => produce(state, (draft) => {
  delete draft[action.cartId];
});

const replace = (state = INITIAL_STATE, action:actionReplace) => produce(state, () => ({
  ...action.itensOfCart,
}));

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
  [Types.DELETE_ITEM]: deleteItem,
  [Types.DELETE_ITENS_BY_CART]: deleteItensByCart,
  [Types.REPLACE]: replace,
});

type actionAddItem = {
  cartId: number;
  item:IItemCart,
}

type actionDeleteItem = {
  item:IItemCart,
}

type actionReplace = {
  itensOfCart: IItensOfCart
}

type actionDeleteItensByCart = {
  cartId: number
}
