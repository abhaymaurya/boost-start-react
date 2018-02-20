import React, { Component } from 'react';
import './Dasboard.css';
import BreadCrumb from './../../sub-components/BreadCrumb/BreadCrumb';
import { Link } from 'react-router-dom';

class Dashboard extends Component {
  render() {
    return (
        <div>
            <BreadCrumb />
            <div class="dashboard">
                <p>Congratulations, you have reached to dashboard.</p>
                <p>Only Link we have at the moment is:
                    <Link to={`/user-list`}>See User List</Link>
                </p>
            </div>
        </div>
    );
  }
}

export default Dashboard;
