import ICart from './ICart';
import IComponents from './IComponents';
import IItemCArt from './IItemCart';

interface IStateGlobal {
  cart:ICart,
  components:IComponents,
  current_item: IItemCArt,
}

export default IStateGlobal;
