import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function accountsSavedReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ACCOUNTS_SAVED_FORM_NEXT_STEP:
    return accountsSavedForm.step + 1
    
    case actionTypes.CLOSE_MODAL:
    return  false
    default:
      {
        return state;
      }
  }
}