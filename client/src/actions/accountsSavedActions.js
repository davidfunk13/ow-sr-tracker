import actionTypes from './actionTypes';

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
