import React, { Component } from 'react';

export default class Root extends Component {
  render () {
    return (
      <div>
        <h3>Create your Valengram</h3>
        {this.props.children}
      </div>
    );
  }
}
