import { createActions, createReducer } from 'reduxsauce';
import { produce } from 'immer';
import ICart from '../../interfaces/models/ICart';
import ICarts from '../../interfaces/models/ICarts';

const INITIAL_STATE:ICarts = {};

export const { Types, Creators } = createActions({
  addCart: ['cart'],
  removeCart: ['cartId'],
  clearCarts: [],
  replace: ['carts'],
  edit: ['cart'],
}, {
  prefix: '@carts/',
});

const edit = (state = INITIAL_STATE, action:actionEdit) => (produce(state, (draft) => {
  const { cart } = action;
  draft[cart.id].name = cart.name;
}));

const addCart = (state = INITIAL_STATE, action:actionAddCart) => (produce(state, (draft) => {
  const newCart = action.cart;
  draft[newCart.id] = newCart;
}));

const removeCart = (state = INITIAL_STATE, action:actionRemoveCart) => produce(state, (draft) => {
  delete draft[action.cartId];
});

const clearCarts = () => INITIAL_STATE;

const replace = (state = INITIAL_STATE, action:actionReplace) => produce(state, () => ({
  ...action.carts,
}));

export default createReducer(INITIAL_STATE, {
  [Types.ADD_CART]: addCart,
  [Types.REMOVE_CART]: removeCart,
  [Types.CLEAR_CARTS]: clearCarts,
  [Types.REPLACE]: replace,
  [Types.EDIT]: edit,
});

type actionEdit = {
  cart:ICart,
}

type actionAddCart = {
  cart:ICart,
}

type actionRemoveCart = {
  cartId: number,
}

type actionReplace = {
  carts: ICarts,
}
