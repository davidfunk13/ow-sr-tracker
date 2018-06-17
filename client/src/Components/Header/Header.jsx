import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActionCreators from '../../actions/userActions';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1 className='header__text'>SR TRACKER</h1>
                {this.props.user.isAuthenticated ?
                    <button className='btn btn--logout' onClick={() => this.props.user.logout()}>Logout</button>
                    :
                    <button className='btn btn--login' onClick={() => this.props.userActions.login()}>Login or Sign Up</button>
                }
            </header>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActionCreators, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
