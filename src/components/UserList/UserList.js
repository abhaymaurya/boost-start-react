import React, { Component } from 'react';
import './UserList.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';
import BreadCrumb from './../../sub-components/BreadCrumb/BreadCrumb';
import UserEdit from './../../sub-components/UserEdit/UserEdit';
import imgPencil from './../../assets/pencil.svg';
import imgCancel from './../../assets/cancel.png';
import imgDelete from './../../assets/delete.png';

class UserList extends Component {
  render() {
    return (
        <div>
            <BreadCrumb />
            <FormLabel />
            <div class="user-list">
                <input className="search" type="text" placeholder="search by name" name="search-box" />
                <ul>
                    <li>
                        <div class="user-list-text">User Name</div>
                        <div class="user-list-icons">
                            <img src={imgPencil} alt="edit" />
                            <img src={imgCancel} alt="cancel" />
                            <img src={imgDelete} alt="delete" />
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