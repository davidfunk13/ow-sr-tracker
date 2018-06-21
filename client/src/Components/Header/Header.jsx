import React, { Component } from 'react';


class Header extends Component {
    componentDidMount() {
        this.props.auth.isAuthenticated()
        // console.log(this.props.auth)
        // console.log(this.props.auth.getProfile());
    }
    // componentWillUpdate(){
    //     this.props.auth.isAuthenticated()
    // }
    render() {
        return (
            <header className="header">
                <h1 className='header__text'>SR TRACKER</h1>
                {this.props.auth.isAuthenticated() ?
                    <button className='btn btn--logout' onClick={() => this.props.auth.logout()}>Logout</button>
                    :
                    <button className='btn btn--logout' onClick={() => this.props.auth.login()}>Login or Signup!</button>
                }
            </header>
        )
    }
}


export default (Header);
