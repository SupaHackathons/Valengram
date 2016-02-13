import Hello from './components/hello';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// This will render into the element with id 'react'
ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={Hello} />
  </Router>),
  document.getElementById('react'));
