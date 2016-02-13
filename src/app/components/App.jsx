import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';

import ValenForm from './ValenForm';

export default class App extends Component {
  render () {
    return (
      <Router history={hashHistory} >
        <Route path='/' component={ValenForm} />
      </Router>
    );
  }
}
