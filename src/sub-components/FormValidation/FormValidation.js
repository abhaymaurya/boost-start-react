import React from 'react';

//function to check if given email is valid
function isValidEmail(email) {
    let re = /^.+@\S*(?!@).$/;
    let validEmail = re.test(email);
    if (!validEmail) {
        return false;
    }
    return true;
}

//function to check if given password is valid
function isValidPassword(password) {
    //length check
    if (password.trim().length < 8) {
        return false;
    }
    return true;
}

//function to check if given confirm password is valid
function isValidConfirmPassword(confirmPassword, password) {
    if (confirmPassword !== password) {
        return false;
    }
    return true;
}

function FormValidation(props) {
    //check if its present if required is set as attribute
    if (props.required && props.dirty){
        return (
            <div className="info">
                {props.name} is required
            </div>
        );
    }
    //check if given input is valid
    if (props.valid && props.value!=='') {
        let valid = true;
        let validMessage = '';
        //email validity
        if ((props.name==='Email') && (!isValidEmail(props.value))) {
            valid = false;
            validMessage = validMessage + ' Email is not valid';
        }
        //password validity
        if ((props.name==='Password') && (!isValidPassword(props.value))) {
            valid = false;
            validMessage = validMessage + ' Password should be at least 8 character long';
        }
        //confirm password validity
        if ((props.name==='ConfirmPassword') && (!isValidConfirmPassword(props.value, props.password))) {
            valid = false;
            validMessage = validMessage + 'Does not match with Password';
        }
        //return if given input is not valid
        if (!valid) {
            return (
                <div className="info">
                    {validMessage}
                </div>
            );
        }
    }

    return null;
}

export default FormValidation;
export { isValidEmail, isValidPassword, isValidConfirmPassword };
