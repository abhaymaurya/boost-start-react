import React, { Component } from 'react';
import './ConfirmDialog.css';

class ConfirmDialog extends Component {
  render() {
    return (
        <div class="confirm-dialog">
            Are you sure?
            <div class="buttons">
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>
    );
  }
}

export default ConfirmDialog;