import React, { Component, cloneElement } from 'react';

export default class Root extends Component {

  onFormSubmit = (val) => {
    this.setState({
      valData: val
    });
  };

  state = {
    valData: {
      files: [
        {
          preview: 'http://i.imgur.com/duKgcOv.jpg'
        },
        {
          preview: 'http://i.imgur.com/xOH0u58.jpg'
        },
        {
          preview: 'http://i.imgur.com/Eo02jkb.jpg'
        }
      ],
      text: ['1', '2', '3']
    }
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
