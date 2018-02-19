import React, { Component } from 'react';
import './UserList.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';
import BreadCrumb from './../../sub-components/BreadCrumb/BreadCrumb';
import UserEdit from './../../sub-components/UserEdit/UserEdit';

class UserList extends Component {
  render() {
    return (
        <div>
            <BreadCrumb />
            <FormLabel />
            <div class="user-list">
                <input type="text" placeholder="search by name" name="search-box" />
                <ul>
                    <li>
                        <div class="user-list-text">User Name</div>
                        <div class="user-list-icons">
                            <img src={require('./../../assets/pencil.svg')} />
                            <img src={require('./../../assets/cancel.png')} />
                            <img src={require('./../../assets/delete.png')} />
                        </div>
                    </li>
                    <UserEdit />
                </ul>
            </div>
        </div>
    );
  }
}

export default UserList;