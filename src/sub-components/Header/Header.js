import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <div class="logo-title">Demo App</div>
                <div class="login-buttons">
                    <a>Logout</a>
                </div>
            </div>
        );
    }
}

export default Header;