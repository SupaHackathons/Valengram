import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Root from './Root';
import ValenForm from './ValenForm';

export default class App extends Component {
  render () {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Root}>
          <IndexRoute component={ValenForm}/>
        </Route>
      </Router>
    );
  }
}
