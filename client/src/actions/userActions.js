// import Auth from '../Auth';
import actionTypes from './actionTypes';

export const loginSuccess = () => {

    return {
        type: actionTypes.LOGIN_SUCCESS,
        // profile
    }
}
export function login() {
    return function (dispatch) {
        return dispatch(loginSuccess());
    }
}