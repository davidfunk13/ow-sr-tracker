import actionTypes from './actionTypes';
import axios from 'axios';

export function signupStep() {
    return {
        type: actionTypes.ACCOUNTS_SAVED_FORM_NEXT_STEP,
    }
}

export const saveBattleTag = BattleTag => {
    return {
        type: actionTypes.SAVE_BATTLETAG,
        BattleTag: BattleTag,
    }
}
export const saveStartingSR = StartingSR => {
    return {
        type: actionTypes.SAVE_STARTING_SR,
        StartingSR: StartingSR,
    }
}
export const saveHerosFocused = HerosFocused => {
    return {
        type: actionTypes.SAVE_HEROS_FOCUSED,
        HerosFocused: HerosFocused,
    }
}
export const saveAccountSuccess = data => {
    return {
        type: actionTypes.SAVE_ACCOUNT_SUCCESS,
        data: data
    }
}
export const saveAccountFailure = (error) => {
    return {
        type: actionTypes.SAVE_ACCOUNT_FAILURE,
        error,
    }
}
export const saveAccount = Account => {
    return function(dispatch) {
        console.log(Account)
      axios
        .post(`/api/saveseason/`, Account)
        .then(data => {
            console.log(data)
            dispatch(saveAccountSuccess(data.data));
        })
        .catch(error => {
            dispatch(saveAccountFailure(error));
          console.log(error);
        });
    };
  };
  export const getAccounts = uid => {
    return function(dispatch) {
        // console.log(uid)
      axios
        .get(`/api/getaccounts/`+ uid)
        .then(data => {
            console.log(data)
            dispatch(getAccountsSuccess(data.data));
        })
        .catch(error => {
            // dispatch(saveAccountFailure(error));
          console.log(error);
        });
    }
  };

  export const getAccountsSuccess = data =>{
      return {
          type: actionTypes.GET_ACCOUNTS_SUCCESS,
          data: data,
      }
  }