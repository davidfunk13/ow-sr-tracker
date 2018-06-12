import React, { Component } from 'react';

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className='header__text'>SR TRACKER</h1>
                {this.props.auth.isAuthenticated() ?
                    <button className='btn btn--logout' onClick={this.props.auth.logout}>Logout</button>
                    :
                    <button className='btn btn--login' onClick={this.props.auth.login}>Login or Sign Up</button>}
            </header>
        )
    }
}