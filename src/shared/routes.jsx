import Hello from './components/hello.jsx';
import Form from './components/form.jsx';
import React from 'react';
import { Route } from 'react-router';

// This will render into the element with id 'react'
export default (
    <Route path='/' component={Hello}>
      <Route path='form/' component={Form} />
    </Route>
);
