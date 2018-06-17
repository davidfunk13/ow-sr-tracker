// import Auth from '../Auth';
import actionTypes from './actionTypes';

export function login() {
    return {
        type: actionTypes.LOGIN_SUCCESS,
    }
}

export const loginSuccess = userData => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            userData
        }
    }
}
export const isAuthenticatedCheck = () => {
    return {
        type: actionTypes.IS_AUTHENTICATED,
    }
}
