import React from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Product from './Components/Product';
import User from './Components/User';
import ProductDetails from './Components/ProductDetails';
import MainHeader from './UI/MainHeader';

export default function App() {
  return (
    <div>
      <h1>Router</h1>
      <MainHeader />
      <Switch>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/product/:productId">
          <ProductDetails />
        </Route>
      </Switch>
    </div>
  );
}
