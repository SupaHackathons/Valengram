import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import styles from '../styles/Valengram.css';

import Root from './Root';
import ValenForm from './ValenForm';
import Valentine from './Valentine';

export default class App extends Component {
  render () {
    return (
      <Router className={styles.valApp} history={hashHistory}>
        <Route path='/' component={Root}>
          <Route path='valentine/' component={Valentine} />
          <IndexRoute component={ValenForm}/>
        </Route>
      </Router>
    );
  }
}
