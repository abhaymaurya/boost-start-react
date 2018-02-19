import React, { Component } from 'react';
import './../SignUp/SignUp.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';
import FormValidation from './../../sub-components/FormValidation/FormValidation';

function Email(props) {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input className="field" type="text" name="email" placeholder="your email address" required value={props.state.email} onChange={props.handleChange} onBlur={props.handleError} />
            <FormValidation name="Email" dirty={props.state.emailDirty} value={props.state.email} required valid />
        </div>
    );
}

function Password(props) {
    return (
        <div>
            <label htmlFor="password">Password</label>
            <input className="field" type="password" name="password" placeholder="your password" required value={props.state.password} onChange={props.handleChange} onBlur={props.handleError} />
            <FormValidation name="Password" dirty={props.state.passwordDirty} value={props.state.password} required valid />
        </div>
    );
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', emailDirty: false, passwordDirty:false};
    }

    handleChange = (event) => {
        if (event.target.value === '') {
            return null;
        }
        const name = event.target.name;
        this.setState({
          [name]: event.target.value,
          [name + 'Dirty']: false
        });
    }

    handleError = (event) => {
        const name = event.target.name;
        const dirty = event.target.value===''?true:false;
        this.setState({
          [name + 'Dirty']: dirty
        });
    }

  render() {
    return (
        <div>
            <FormLabel title="Login Form"/>
            <form className="login-form">
                <Email state={this.state} handleChange={this.handleChange} handleError={this.handleError} />
                <Password state={this.state} handleChange={this.handleChange} handleError={this.handleError} />
                <input type="submit" value="Submit" />
            </form>
            <form className="forgot-password-form">
                <Email state={this.state} handleChange={this.handleChange} handleError={this.handleError} />
                <input type="submit" value="Submit" />
            </form>
            <div className="question">Don't have an account? <a>Sign Up</a></div>
            <div className="question"><span>Forgot Password?</span></div>
            <div className="question"><span>Login</span></div>
        </div>
    );
  }
}

export default Login;
