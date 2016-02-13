import Hello from './app/components/hello';
import Form from './app/components/form';
import Valengram from './app/components/valengram';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

// This will render into the element with id 'react'
render((
  <Router history={hashHistory}>
    <Route path='/' component={Hello} />
    <Route path='/form/' component={Form} />
    <Route path='/valengram/' component={Valengram} />
  </Router>),
  document.getElementById('react'));
