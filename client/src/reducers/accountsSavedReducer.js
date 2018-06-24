import actionTypes from '../actions/actionTypes';
import initialState from './initialState';
import HerosFocused from '../Components/AddAccountForm/HerosFocused/HerosFocused';
import actions from '../actions/actionTypes';
export default function accountsSavedReducer(state = initialState.accountsSavedForm, action) {

  switch (action.type) {
    case actionTypes.ACCOUNTS_SAVED_FORM_NEXT_STEP:
      return {
        ...state,
        step: state.step + 1,
      }
    // update(state, {
    //   step: {$set: state.step ++}
    // })

    case actionTypes.SAVE_BATTLETAG:
    return {
      ...state,
      accountsSaved: [
        {
          ...state.accountsSaved[0],
          BattleTag: action.BattleTag
        }
      ]
    }
    case actionTypes.SAVE_STARTING_SR:
      return {
        ...state,
        accountsSaved: [
          {
            ...state.accountsSaved[0],
            StartingSR: action.StartingSR
          }
        ]
      }
    case actionTypes.SAVE_HEROS_FOCUSED:
      return {
        ...state,
        accountsSaved: [
          {
            ...state.accountsSaved[0],
            HerosFocused: state.accountsSaved[0].HerosFocused.concat(action.HerosFocused)   
          }
        ]
      }
      case actionTypes.SAVE_ACCOUNT_SUCCESS:
      return {
        ...state,
        account: action.data,
      }
    default:
      {
        return state;
      }
  }
}