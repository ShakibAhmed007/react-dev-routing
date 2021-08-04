import React from 'react';
import './style.css';
import { Route } from 'react-router-dom';
import Welcome from './Components/Welcome';
import Product from './Components/Product';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Route path="/welcome">
        <Welcome />
      </Route>
      <Route path="/product">
        <Product />
      </Route>
    </div>
  );
}
