import React, { Component } from 'react';
import './SignUp.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';

class SignUp extends Component {
  render() {
    return (
        <div>
            <FormLabel />
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
                <div>
                    <label for="password">Password</label>
                    <input class="field" type="password" id="password" name="password" placeholder="your password" minlength="8" required />
                    <div class="info">
                        Password is required and should be at least 8 character long
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
            <div class="question">Already have an account? <a routerLink="/login">Login</a></div>
        </div>
    );
  }
}

export default SignUp;