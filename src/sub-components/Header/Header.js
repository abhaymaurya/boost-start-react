import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="logo-title">Demo App</div>
                <div className="login-buttons">
                    <a>Logout</a>
                </div>
            </div>
        );
    }
}

export default Header;