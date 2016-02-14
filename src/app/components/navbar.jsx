import React, { Component } from 'react';
import { Link } from 'react-router';

export default class NavBar extends Component {

  render () {
    return (
      <div className='navBar'>
        <div className='navItem'><Link to='/'>Home</Link></div>
        <div className='navItem'><Link to='/valengram/'>Valengram</Link></div>
      </div>
    );
  }
}
