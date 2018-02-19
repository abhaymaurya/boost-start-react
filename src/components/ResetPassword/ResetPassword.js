import React, { Component } from 'react';
import './ResetPassword.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';

class ResetPassword extends Component {
  render() {
    return (
        <div>
            <FormLabel />
            <form>
                <div>
                    <label for="email">Email</label>
                    <span class="field">Email address</span>
                </div>

                <div>
                    <label for="password">Password</label>
                    <input class="field" type="password" id="password" name="password" placeholder="your password" minlength="8" required />
                    <div class="info">
                        Password is required
                    </div>
                </div>

                <div>
                    <label for="password">Confirm Password</label>
                    <input class="field" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" minlength="8" required />
                    <div class="info">
                        Passwords do not match
                    </div>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
  }
}

export default ResetPassword;