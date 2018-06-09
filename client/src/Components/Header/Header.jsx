import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <h1>welcome to OW SR tracker, {this.props.name}</h1>
                <button className='btn btn-login' onClick={this.props.auth.login}>Login</button>
                <button className='btn btn-logout' onClick={this.props.auth.logout}>Logout</button>
            </header>
        )
    }
}