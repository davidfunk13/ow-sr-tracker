import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function accountsSavedReducer(state = initialState.accountsSavedForm, action) {
  switch (action.type) {
    case actionTypes.ACCOUNTS_SAVED_FORM_NEXT_STEP:
    return {
      ...state,
      step: state.step + 1,
    }
    case actionTypes.SAVE_BATTLETAG:
      return {
        ...state,
        accountsSaved: {
          1:{
            BattleTag: action.BattleTag,
            startingSr: "",
            herosFocused: [],
          }
        }
      }
    default:
      {
        return state;
      }
  }
}