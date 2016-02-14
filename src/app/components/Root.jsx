import React, { Component, cloneElement } from 'react';
import styles from '../styles/Valengram.css';

import Nav from './navbar';

export default class Root extends Component {

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
      text: ['0', '1', '2']
    }
  };

  onFormSubmit = (val) => {
    this.setState({
      valData: val
    });
  };

  render () {
    return (
      <div>
        <Nav history={this.props.history}
             location={this.props.location} />
        {this.props.children && cloneElement(this.props.children,
          {onFormSubmit: this.onFormSubmit, valData: this.state.valData})}
      </div>
    );
  }
}
