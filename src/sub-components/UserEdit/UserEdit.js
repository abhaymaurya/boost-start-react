import React, { Component } from 'react';
import './UserEdit.css';

class UserEdit extends Component {
  render() {
    return (
        <form>
            <div>
                <label for="name">Name</label>
                <input class="field" type="text" id="name" name="name" placeholder="your name" required />
            </div>

            <div>
                <label for="email">Email</label>
                <input class="field" type="text" id="email" name="email" placeholder="your email address" required />
                <div class="info">
                    Email is required
                </div>
            </div>
            <input type="submit" value="Save" />
        </form>
    );
  }
}

export default UserEdit;