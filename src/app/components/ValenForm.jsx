import React, { Component } from 'react';

import styles from '../styles/Valengram.css';

export default class ValenForm extends Component {
  render () {
    return (
      <div>
        <h1>Make a Valengram!</h1>
        <input type='text' className={styles.questionInput}
          placeholder="What is your valentine's name/nickname?" />
        <input type='text' className={styles.questionInput}
          placeholder='Where did you first meet?' />
        <input type='text' className={styles.questionInput}
          placeholder='What do you love most about your valetine' />
        <input type='submit' />
      </div>
    );
  }
}
