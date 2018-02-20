import React, { Component } from 'react';
import './../SignUp/SignUp.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';
import FormValidation from './../../sub-components/FormValidation/FormValidation';
import { isValidEmail, isValidPassword } from './../../sub-components/FormValidation/FormValidation';
import { Link } from 'react-router-dom';

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
            <input className="field" type="password" name="password" placeholder="your password" minLength="8" required value={props.state.password} onChange={props.handleChange} onBlur={props.handleError} />
            <FormValidation name="Password" dirty={props.state.passwordDirty} value={props.state.password} required valid />
        </div>
    );
}

function LoginForm(props){
    return (
        <div>
            <FormLabel title="Login Form"/>
            <form className="login-form">
                <Email state={props.state} handleChange={props.handleChange} handleError={props.handleError} />
                <Password state={props.state} handleChange={props.handleChange} handleError={props.handleError} />
                <input type="submit" value="Submit" disabled={props.isValidInput} />
            </form>
            <div className="question">Don't have an account? <Link to={`/sign-up`}>Sign Up</Link></div>
            <div className="question" onClick={props.loadForgotPasswordForm}><span>Forgot Password?</span></div>
        </div>
    );
}

function ForgotPasswordForm(props) {
    return (
        <div>
            <FormLabel title="Forgot Password Form"/>
            <form className="forgot-password-form">
                <Email state={props.state} handleChange={props.handleChange} handleError={props.handleError} />
                <input type="submit" value="Submit" disabled={props.isValidInput} />
            </form>
            <div className="question" onClick={props.loadLoginForm}><span>Login</span></div>
        </div>
    );
}

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {email: '', password: '', emailDirty: false, passwordDirty:false, 'loadLoginForm': true};
    }

    handleChange = (event) => {
        console.log(this.state, event.target.value);
        const nameDirty = event.target.name+'Dirty';
        if (event.target.value === '' && this.state.nameDirty) {
            return null;
        }

        const name = event.target.name;
        if (event.target.value !== '') {
            this.setState({
              [name]: event.target.value,
              [name + 'Dirty']: false
            });
        } else {
            this.setState({
              [name]: event.target.value,
              [name + 'Dirty']: true
            });
        }
    }

    handleError = (event) => {
        const name = event.target.name;
        const dirty = event.target.value===''?true:false;
        this.setState({
          [name + 'Dirty']: dirty
        });
    }

    isValidLoginInput = () => {
        if (
            !this.state.email || 
            !isValidEmail(this.state.email) || 
            !this.state.password || 
            !isValidPassword(this.state.password)
        ) {
            return true;
        }
        return false;
    }

    isValidForgotPasswordInput = () => {
        if (
            !this.state.email || 
            !isValidEmail(this.state.email)
        ) {
            return true;
        }
        return false;
    }

    loadForgotPasswordForm = () => {
        this.setState({loadLoginForm: false});
    }

    loadLoginForm = () => {
        this.setState({loadLoginForm: true});
    }

  render() {
    let form = null;
    if (this.state.loadLoginForm) {
        form = <LoginForm state={this.state} handleChange={this.handleChange} handleError={this.handleError} isValidInput={this.isValidLoginInput()} loadForgotPasswordForm={this.loadForgotPasswordForm} />
    } else {
        form = <ForgotPasswordForm state={this.state} handleChange={this.handleChange} handleError={this.handleError} isValidInput={this.isValidForgotPasswordInput()} loadLoginForm={this.loadLoginForm} />
    }
    return (
        <div>
            {form}
        </div>
    );
  }
}

export default Login;
