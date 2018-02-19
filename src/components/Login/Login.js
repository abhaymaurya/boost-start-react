import React, { Component } from 'react';
import './../SignUp/SignUp.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';

class Login extends Component {
  render() {
    return (
        <div>
            <FormLabel />
            <form>
                <div>
                    <label for="email">Email</label>
                    <input class="field" type="text" id="email" name="email" placeholder="your email address" required />
                    <div class="info">
                        Email is required
                    </div>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input class="field" type="password" id="password" name="password" placeholder="your password" required />
                    <div class="info">
                        Password is required
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
            <form>
                <div>
                    <label for="email">Email</label>
                    <input class="field" type="text" id="email" name="email" placeholder="your email address" required />
                    <div class="info">
                        Email is required
                    </div>
                </div>
                <input type="submit" value="Submit" />
            </form>
            <div class="question">Don't have an account? <a>Sign Up</a></div>
            <div class="question"><span>Forgot Password?</span></div>
            <div class="question"><span>Login</span></div>
        </div>
    );
  }
}

export default Login;