import React, { Component } from 'react';
import { Link } from 'react-router';

import styles from './navbar.css';

export default class NavBar extends Component {

  render () {
    return (
      <div className={styles.navBar}>
        <div className={styles.navItem}><Link to='/'>Home</Link></div>
        <div className={styles.navItem}><Link to='/valentine/'>Valengram</Link></div>
      </div>
    );
  }
}
