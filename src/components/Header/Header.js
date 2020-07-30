import React, { Component } from 'react'
import logo from '../../img/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} className='App-logo' alt='logo' />
            </div>
        )
    }
}
