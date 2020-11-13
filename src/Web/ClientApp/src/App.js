import React, { Component } from 'react';
import { Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import Login from './authentication/Login';
import Register from './authentication/Register';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} exact />
          <Route path='/'>
          <Layout>
            <Route exact path='/' component={Home} />
            <Route path='*' />
          </Layout>
          </Route>
        </Switch>
      
      
      </div>
    );
  }
}
