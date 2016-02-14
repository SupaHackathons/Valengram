import React, { Component, cloneElement } from 'react';

export default class Root extends Component {

  onFormSubmit = (val) => {
    this.setState({
      valData: val
    });
  };

  state = {
    valData: {}
  };

  render () {
    return (
      <div>
        <h3>Create your Valengram</h3>
        {this.props.children && cloneElement(this.props.children,
          {onFormSubmit: this.onFormSubmit, valData: this.state.valData})}
      </div>
    );
  }
}
