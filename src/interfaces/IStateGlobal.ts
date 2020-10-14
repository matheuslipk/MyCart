import IComponents from './IComponents';
import ICarts from './models/ICarts';
import IItemCart from './models/IItemCart';
import IItensOfCart from './models/ItensOfCard';

interface IStateGlobal {
  carts:ICarts,
  itens_of_cart:IItensOfCart,
  current_item: IItemCart,
  components: IComponents,
}

export default IStateGlobal;
