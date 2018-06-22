import actionTypes from './actionTypes';

export function signupStep() {
    return {
        type: actionTypes.OPEN_MODAL,
    }
}

export function closeModal() {
    return {
        type: actionTypes.CLOSE_MODAL,
    }
}
