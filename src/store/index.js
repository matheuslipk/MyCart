/* eslint no-console: "off" */
/* eslint no-undef: "off" */
import { createStore, combineReducers, applyMiddleware } from 'redux';
import carts from './ducks/carts';
import components from './ducks/components';
import current_item from './ducks/current_item';
import itens_of_cart from './ducks/itens_of_cart';

const logger = (store) => (next) => (action) => {
  console.log('dispatching', action);
  const result = next(action);
  console.log('nextState', store.getState());
  return result;
};

const crashReporter = (store) => (next) => (action) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    Raven.captureException(err, {
      extra: {
        action,
        state: store.getState(),
      },
    });
    throw err;
  }
};

const reducers = combineReducers({
  carts,
  components,
  current_item,
  itens_of_cart,
});

const showStoreGlobalInLog = true;
const middlewawre = (__DEV__ && showStoreGlobalInLog && [logger, crashReporter]) || [];

const store = createStore(reducers, applyMiddleware(...middlewawre));

export default store;
