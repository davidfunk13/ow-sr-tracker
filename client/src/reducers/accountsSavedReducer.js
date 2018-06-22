import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function accountsSavedReducer(state = initialState.accountsSavedForm, action) {
  switch (action.type) {
    case actionTypes.ACCOUNTS_SAVED_FORM_NEXT_STEP:
    return {
      ...state,
      step: state.step + 1,
    }
    default:
      {
        return state;
      }
  }
}