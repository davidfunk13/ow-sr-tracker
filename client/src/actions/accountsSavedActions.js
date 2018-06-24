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
// export const saveAccount = Account => {
//     return {
//         type: actionTypes,
//         Account: Account,
//     }
// }
export const saveAccount = Account => {
    return function(dispatch) {
        console.log(Account)
    //   axios
    //     .post(`/api/saveseason/`, Account)
    //     .then(data => {
    //         console.log(data)
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
    };
  };