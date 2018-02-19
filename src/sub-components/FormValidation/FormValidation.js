import React from 'react';

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
        if (props.name==='Email') {
            let re = /^.+@\S*(?!@).$/;
            let validEmail = re.test(props.value);
            if (!validEmail) {
                valid = false;
                validMessage = validMessage + ' Email is not valid';
            }
        }
        //password validity
        if (props.name==='Password') {
            //length check
            if (props.value.trim().length < 8) {
                valid = false;
                validMessage = validMessage + ' Password should be at least 8 character long';
            }
            //here you can add other checks as well
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
