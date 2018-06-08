import React, { Component } from 'react';

export default class Secret extends Component {
    render() {
        return (
            <div className="secret-container">
                <p>secret area</p>

               <a href="/">Go Home</a>
               <button onClick={this.props.auth.logout}>Logout</button>
            </div>
        )
    }
}