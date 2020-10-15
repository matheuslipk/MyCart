import { useAsyncStorage } from '@react-native-community/async-storage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import IStateGlobal from '../interfaces/IStateGlobal';
import { types } from '../storage/types';
import { Creators as ItensOfCartCreatos } from '../store/ducks/itens_of_cart';

const ListenerCarts = () => {
  const { getItem, setItem } = useAsyncStorage(types.itens_of_cart);
  const dispatch = useDispatch();
  const itens_of_cart = useSelector((state:IStateGlobal) => state.itens_of_cart);

  useEffect(() => {
    const getCartsOfStorage = async () => {
      let itensOfcartStorage = await getItem();
      itensOfcartStorage = itensOfcartStorage !== null ? JSON.parse(itensOfcartStorage) : null;
      if (itensOfcartStorage) {
        dispatch(ItensOfCartCreatos.replace(itensOfcartStorage));
      }
    };
    getCartsOfStorage();
  }, []);

  useEffect(() => {
    setItem(JSON.stringify(itens_of_cart));
  }, [itens_of_cart]);

  return null;
};

export default ListenerCarts;
