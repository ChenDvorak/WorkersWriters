import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Login } from './authentication/Login';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <div>
        <Switch>
        <Route path='/login' component={Login} />
        <Route exact path='/auth'>
          <Redirect to='login'/>
        </Route>
      <Route path='/'>
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
      </Layout>
      </Route>
        </Switch>
      
      
      </div>
    );
  }
}
