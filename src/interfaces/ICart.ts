import IItemCArt from './IItemCart';

interface ICart {
  itens:{
    [key:number]: IItemCArt;
  }
  createdAt: string;
}

export default ICart;
