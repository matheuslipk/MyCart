import IItemCart from './IItemCart';

interface IItensOfCart {
  [idCart:number]:{
    [idItemCart:number]:IItemCart;
  }
}

export default IItensOfCart;
