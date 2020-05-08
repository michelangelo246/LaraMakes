import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div>
      <Header/>
      <div className="body-template">
        <Switch>
          <Route
            exact
            path='/'
            component={HomePage}
          />
          <Route
            exact
            path='/shop'
            component={ShopPage}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
