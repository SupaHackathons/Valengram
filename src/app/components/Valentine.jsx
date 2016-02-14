import React, { Component } from 'react';
import styles from '../styles/Valengram.css';

export default class ValenForm extends Component {

  static propTypes = {
    valData: React.PropTypes.object
  };

  render () {
    console.log('VALENTINE PROPS valdata files', this.props.valData.files);
    return (
      <div>
        <h1>here's your Valengram!</h1>
      </div>
    );
  }
}
