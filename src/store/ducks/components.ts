import { createActions, createReducer } from 'reduxsauce';
import IComponents from '../../interfaces/IComponents';

const INITIAL_STATE:IComponents = {
  modalNewItemVisible: false,
};

export const { Types, Creators } = createActions({
  setModalNewItemVisible: ['visible'],
}, {
  prefix: '@components/',
});

const setModalNewItemVisible = (state = INITIAL_STATE, action:actionSetModalNewItemVisible) => ({
  ...state,
  modalNewItemVisible: action.visible,
}) as IComponents;

export default createReducer(INITIAL_STATE, {
  [Types.SET_MODAL_NEW_ITEM_VISIBLE]: setModalNewItemVisible,
});

type actionSetModalNewItemVisible = {
  visible:boolean,
}
