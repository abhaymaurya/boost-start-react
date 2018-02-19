import React from 'react';
import './FormLabel.css';

function FormLabel (props) {
    return (
        <div className="form-label">
            <span>{props.title}</span>
        </div>
    );
}

export default FormLabel;