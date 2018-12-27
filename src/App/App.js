import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import ShopComponent from './components/shop.component'
import EditComponent from './components/edit.component'
import AddComponent from './components/add.component'

class App extends Component {
  render() {
    return (
      <Switch>
            <Route exact path="/" component={ShopComponent}></Route>
            <Route path="/add" component={AddComponent}></Route>
            <Route path="/edit/:id" component={EditComponent}></Route>
      </Switch>
    );
  }
}
export default App;