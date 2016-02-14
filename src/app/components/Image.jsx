import React, { Component } from 'react';
import styles from '../styles/Valengram.css';

export default class Image extends Component {

  static propTypes = {
    img: React.PropTypes.string
  };

  render () {
    return (
      <div>
        <img className={styles.valImage} src={this.props.img} />
      </div>
    );
  }

}
