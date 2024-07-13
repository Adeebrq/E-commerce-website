//@ts-nocheck
import React from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./index.css";


import App from './components/App';
import Cart from "./components/Cart"
import BaseLayout from './components/BaseLayout';
import Accessories from './components/Accessories';
import Men from "./components/Men";
import Women from "./components/Women";
import ShowProduct from "./components/ShowProduct"
import Clothes from './components/Clothes';
import registerServiceWorker from './RegisterServiceWorker';
ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <Switch>
    <Route exact path='/' Component={App}/>
    <Route path="/Accessories" Component={Accessories}/>
    <Route path="/Cart" Component= {Cart} />
    <Route path="/men" Component={Men} />
    <Route path='/Clothes' Component={Clothes} />
    <Route path='/women' Component={Women} />
    <Route exact path='/products/:id' Component={ShowProduct}/>
  </Switch>
  </BaseLayout>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
