import Auth from '../Auth';
import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const auth = new Auth();




// function isAuthenticated() {
    // auth.isAuthenticated();
// }

// function getProfile() {
    // auth.getProfile();
// }


export default function userReducer(state = initialState.user, action) {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: auth.isAuthenticated(),
                profile: action.profile,

            })
        default:
            return state;
    }
}

