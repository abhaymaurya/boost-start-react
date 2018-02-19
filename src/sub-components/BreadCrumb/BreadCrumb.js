import React, { Component } from 'react';
import './BreadCrumb.css';

class BreadCrumb extends Component {
  render() {
    return (
        <div class="div-breadcrumbs">
            <div>
                <div>
                    <a class="breadcrumb-link">Label</a>
                    <span>Label</span>
                </div>
            </div>
        </div>
    );
  }
}

export default BreadCrumb;
