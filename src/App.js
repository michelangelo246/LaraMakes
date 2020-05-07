import React from 'react';
import HomePage from './pages/homepage/homepage.component'
import { Route, Switch } from 'react-router-dom';
import './App.css';

const BatonsPage = () => (
  <div>
    <h1>Batons</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={HomePage}
        />
        <Route
          exact
          path='/batons'
          component={BatonsPage}
        />
      </Switch>
    </div>
  );
}

export default App;
