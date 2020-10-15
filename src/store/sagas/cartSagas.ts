import { put, takeEvery } from 'redux-saga/effects';
import { Types as TypesCart } from '../ducks/carts';
import { Types as TypesItensOfCart } from '../ducks/itens_of_cart';

type actionRemoveCart = {
  cartId: number,
}

function* deleteItensOfCart(action:actionRemoveCart) {
  yield put({ type: TypesItensOfCart.DELETE_ITENS_BY_CART, cartId: action.cartId });
}

function* mySaga() {
  yield takeEvery(TypesCart.REMOVE_CART, deleteItensOfCart);
}

export default mySaga;
