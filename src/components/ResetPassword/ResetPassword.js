import React, { Component } from 'react';
import './../SignUp/SignUp.css';
import FormLabel from './../../sub-components/FormLabel/FormLabel';
import FormValidation from './../../sub-components/FormValidation/FormValidation';
import { isValidPassword, isValidConfirmPassword } from './../../sub-components/FormValidation/FormValidation';

function Email(props) {
    return (
        <div>
            <label for="email">Email</label>
            <span class="field">{props.email}</span>
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

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {email: 'Email Addr.', password: '', confirmPassword:'', passwordDirty:false, confirmPasswordDirty:false};
    }

    handleChange = (event) => {
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
    }

    isValidInput = () => {
        if (
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
            <FormLabel title="Reset Password Form"/>
            <form className="reset-form">
                <Email email={this.state.email} />
                <Password state={this.state} handleChange={this.handleChange} handleError={this.handleError} />
                <ConfirmPassword state={this.state} handleChange={this.handleChange} handleError={this.handleError} password={this.state.password} />
                <input type="submit" value="Submit" disabled={this.isValidInput()} />
            </form>
        </div>
    );
  }
}

export default ResetPassword;