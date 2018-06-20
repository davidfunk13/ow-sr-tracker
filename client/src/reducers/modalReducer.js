import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function modalReducer(state = initialState.showModal, action) {
  switch (action.type) {
    case actionTypes.OPEN_MODAL:
      {
        return action.type;
      }
    case actionTypes.CLOSE_MODAL:
      {
        return action.type;
      }

    default:
      {
        return state;
      }
  }
}