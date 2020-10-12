import { createActions, createReducer } from 'reduxsauce';
import IItemCart from '../../interfaces/IItemCart';

const INITIAL_STATE:IItemCart = {
  id: 0,
  name: '',
  amount: 0,
  unitPrice: 0,
};

export const { Types, Creators } = createActions({
  replace: ['item'],
  setName: ['name'],
  setAmount: ['amount'],
  setUnitPrice: ['unitPrice'],
  clear: [],
});

const replace = (state = INITIAL_STATE, action:actionReplace) => ({
  ...state,
  ...action.item,
}) as IItemCart;

const setName = (state = INITIAL_STATE, action:actionSetName) => ({
  ...state,
  name: action.name,
}) as IItemCart;

const setAmount = (state = INITIAL_STATE, action:actionSetAmount) => ({
  ...state,
  amount: action.amount,
}) as IItemCart;

const setUnitPrice = (state = INITIAL_STATE, action:actionSetUnitPrice) => ({
  ...state,
  unitPrice: action.unitPrice,
}) as IItemCart;

const clear = () => INITIAL_STATE;

export default createReducer(INITIAL_STATE, {
  [Types.REPLACE]: replace,
  [Types.SET_NAME]: setName,
  [Types.SET_AMOUNT]: setAmount,
  [Types.SET_UNIT_PRICE]: setUnitPrice,
  [Types.CLEAR]: clear,
});

type actionReplace = {
  item: IItemCart,
}

type actionSetName = {
  name: string,
}

type actionSetAmount = {
  amount: number,
}

type actionSetUnitPrice = {
  unitPrice: number,
}
