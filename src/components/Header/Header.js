import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className='container centered'>
        <Link to='/'>
          <img classname='logo' src={logo} className='logo' alt='logo' />
        </Link>
      </div>
    );
  }
}
