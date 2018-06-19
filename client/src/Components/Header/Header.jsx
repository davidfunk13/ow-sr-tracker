import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions';

class Header extends Component {
    componentDidMount() {
        this.props.auth.isAuthenticated()
        console.log(this.props.auth)
        console.log(this.props.auth.getProfile());
    }
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

function mapStateToProps(state) {
    return {
        // user: state.user,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        // userActions: bindActionCreators(userActionCreators, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
