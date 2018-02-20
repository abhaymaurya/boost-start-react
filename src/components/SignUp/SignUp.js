import React, { Component } from 'react';
import './SignUp.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';
import FormValidation from './../../sub-components/FormValidation/FormValidation';
import { isValidEmail, isValidPassword, isValidConfirmPassword } from './../../sub-components/FormValidation/FormValidation';
import { Link } from 'react-router-dom';

function Name(props) {
    return (
        <div>
            <label htmlFor="name">Name</label>
            <input className="field" type="text" id="name" name="name" placeholder="your name" value={props.state.name} onChange={props.handleChange} />
        </div>
    );
}

function Email(props) {
    return (
        <div>
            <label htmlFor="email">Email</label>
            <input className="field" type="text" id="email" name="email" placeholder="your email address" required value={props.state.email} onChange={props.handleChange} onBlur={props.handleError} />
            <FormValidation name="Email" dirty={props.state.emailDirty} value={props.state.email} required valid />
        </div>
    );
}

function Password(props) {
    return (
        <div>
            <label htmlFor="password">Password</label>
            <input className="field" type="password" id="password" name="password" placeholder="your password" minLength="8" required value={props.state.password} onChange={props.handleChange} onBlur={props.handleError} />
            <FormValidation name="Password" dirty={props.state.passwordDirty} value={props.state.password} required valid />
        </div>
    );
}

function ConfirmPassword(props) {
    return (
        <div>
            <label htmlFor="password">Confirm Password</label>
            <input className="field" type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm your password" minLength="8" required value={props.state.confirmPassword} onChange={props.handleChange} onBlur={props.handleError} />
            <FormValidation name="ConfirmPassword" dirty={props.state.confirmPasswordDirty} value={props.state.confirmPassword} password={props.password} required valid />
        </div>
    );
}

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', email: '', password: '', confirmPassword:'', emailDirty: false, passwordDirty:false, confirmPasswordDirty:false};
    }

    handleChange = (event) => {
        console.log(this.state, event.target.value);
        const nameDirty = event.target.name+'Dirty';
        if (event.target.value === '' && this.state.nameDirty) {
            return null;
        }

        const name = event.target.name;
        if (name !== 'name') {
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
        } else {
            this.setState({
                [name]: event.target.value
            });
        }
    }

    handleError = (event) => {
        const name = event.target.name;
        const dirty = event.target.value===''?true:false;
        if (name==='confirmPassword') {
            //set dirty attribute only if password has been set
            if (this.state.password) {
                this.setState({
                  [name + 'Dirty']: dirty
                });
            }
        } else {
            this.setState({
              [name + 'Dirty']: dirty
            });
        }
        console.log(this.state);
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

    isValidInput = () => {
        if (
            !this.state.email || 
            !isValidEmail(this.state.email) || 
            !this.state.password || 
            !isValidPassword(this.state.password) ||
            !this.state.confirmPassword || 
            !isValidConfirmPassword(this.state.confirmPassword, this.state.password)
        ) {
            return true;
        }
        return false;
    }

  render() {
    return (
        <div>
            <FormLabel title="Sign Up Form" />
            <form className="sign-up-form">
                <Name state={this.state} handleChange={this.handleChange} />
                <Email state={this.state} handleChange={this.handleChange} handleError={this.handleError} />
                <Password state={this.state} handleChange={this.handleChange} handleError={this.handleError} />
                <ConfirmPassword state={this.state} handleChange={this.handleChange} handleError={this.handleError} password={this.state.password} />
                <input type="submit" value="Submit" disabled={this.isValidInput()} />
            </form>
            <div className="question">Already have an account? <Link to={`/login`}>Login</Link></div>
        </div>
    );
  }
}

export default SignUp;