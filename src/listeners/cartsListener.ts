import { useAsyncStorage } from '@react-native-community/async-storage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IStateGlobal from '../interfaces/IStateGlobal';
import { types } from '../storage/types';
import { Creators as CartCreatos } from '../store/ducks/carts';

const ListenerCarts = () => {
  const { getItem, setItem } = useAsyncStorage(types.carts);
  const dispatch = useDispatch();
  const carts = useSelector((state:IStateGlobal) => state.carts);

  useEffect(() => {
    const getCartsOfStorage = async () => {
      let cartsStorage = await getItem();
      cartsStorage = cartsStorage !== null ? JSON.parse(cartsStorage) : null;
      if (cartsStorage) {
        dispatch(CartCreatos.replace(cartsStorage));
      }
    };
    getCartsOfStorage();
  }, []);

  useEffect(() => {
    setItem(JSON.stringify(carts));
  }, [carts]);

  return null;
};

export default ListenerCarts;
