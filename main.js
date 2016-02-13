import Hello from './app/components/hello';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

// This will render into the element with id 'react'
render((
  <Router history={hashHistory}>
    <Route path='/' component={Hello} />
  </Router>),
  document.getElementById('react'));
