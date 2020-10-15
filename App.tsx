import React from 'react';
import { Provider } from 'react-redux';
import Routes from './src/routes/routes';
import store from './src/store';
import CartListener from './src/listeners/cartsListener';
import ItensOfCartListener from './src/listeners/itensOfCartListener';

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
      <CartListener />
      <ItensOfCartListener />
    </Provider>
  );
}
