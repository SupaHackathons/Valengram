import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Root from './Root';
import ValenForm from './ValenForm';
import ValenGram from './ValenGram';

export default class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Root}>
          <Route path='valengram/' component={ValenGram} />
          <IndexRoute component={ValenForm}/>
        </Route>
      </Router>
    );
  }
}
