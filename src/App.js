import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';

import './App.css';
import Cats from 'Routes/cats'
import { configureStore } from './store';


const App = () => (
  <Provider store={configureStore()}>
    <Router>
      <Switch>
        <Route path="/" component={Cats}></Route>
      </Switch>
    </Router>
  </Provider>
);

export default App;
