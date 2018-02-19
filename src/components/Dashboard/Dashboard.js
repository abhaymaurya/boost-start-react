import React, { Component } from 'react';
import './Dasboard.css';
import BreadCrumb from './../../sub-components/BreadCrumb/BreadCrumb';

class Dashboard extends Component {
  render() {
    return (
        <div>
            <BreadCrumb />
            <div class="dashboard">
                <p>Congratulations, you have reached to dashboard.</p>
                <p>Only Link we have at the moment is:
                    <a>See User List</a>
                </p>
            </div>
        </div>
    );
  }
}

export default Dashboard;
