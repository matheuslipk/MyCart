import { createActions, createReducer } from 'reduxsauce';
import { produce } from 'immer';
import ICart from '../../interfaces/ICart';
import IItemCart from '../../interfaces/IItemCart';

const INITIAL_STATE:ICart = {
  itens: {
    1: {
      id: 1,
      name: 'Arroz',
      amount: 2,
      unitePrice: 3.3,
    },
  },
  createdAt: '',
};

export const { Types, Creators } = createActions({
  addItem: ['item'],
  removeItem: ['idItem'],
  clearItens: [],
});

const addItem = (state = INITIAL_STATE, action:actionAddItem) => (produce(state, (draft) => {
  const newItem = action.item;
  draft.itens[newItem.id] = newItem;
}));

const removeItem = (state = INITIAL_STATE, action:actionRemoveItem) => produce(state, (draft) => {
  delete draft.itens[action.idItem];
});

const clearItens = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
  [Types.REMOVE_ITEM]: removeItem,
  [Types.CLEAR_ITENS]: clearItens,
});

type actionAddItem = {
  item:IItemCart,
}

type actionRemoveItem = {
  idItem: number,
}
