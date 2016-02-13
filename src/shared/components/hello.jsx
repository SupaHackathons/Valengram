import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Hello extends Component {
  render () {
    return (
      <div>
        <h3>This is a react component!</h3>
        <div>First one of the project</div>
        <div>W00t!!!</div>
        <ul>
          <li><Link to='/form/'>Form</Link></li>
        </ul>
      </div>
    );
  }
}
