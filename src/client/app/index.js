import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import {
  Home,
  Foo,
} from './routes';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/foo" exact component={Foo}/>
      </Switch>
    )
  }
}

export default App;