import { createActions, createReducer } from 'reduxsauce';
import { produce } from 'immer';
import ICart from '../../interfaces/models/ICart';
import ICarts from '../../interfaces/models/ICarts';

const INITIAL_STATE:ICarts = {
  1: {
    id: 1,
    name: 'Cart 1',
  },
};

export const { Types, Creators } = createActions({
  addCart: ['cart'],
  removeCart: ['idItem'],
  clearCarts: [],
}, {
  prefix: '@carts/',
});

const addCart = (state = INITIAL_STATE, action:actionAddCart) => (produce(state, (draft) => {
  const newCart = action.cart;
  draft[newCart.id] = newCart;
}));

const removeCart = (state = INITIAL_STATE, action:actionRemoveCart) => produce(state, (draft) => {
  delete draft[action.idCart];
});

const clearCarts = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.ADD_CART]: addCart,
  [Types.REMOVE_CART]: removeCart,
  [Types.CLEAR_CARTS]: clearCarts,
});

type actionAddCart = {
  cart:ICart,
}

type actionRemoveCart = {
  idCart: number,
}
