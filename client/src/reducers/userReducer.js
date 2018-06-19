import Auth from '../Components/Auth/Auth';
import actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const userReducer = (
    state = initialState.user,
    action
  ) => {
    switch (action.type) {
      default:
        return state;
    }
  };

  export default userReducer;



// function isAuthenticated() {
// auth.isAuthenticated();
// }

// function getProfile() {
// auth.getProfile();
// }


// export default function userReducer(state = initialState.user, action) {
//     switch (action.type) {
//         case actionTypes.LOGIN:
//             return auth.login();
//         case actionTypes.LOGIN_SUCCESS:
//             return action.type
//         case actionTypes.IS_AUTHENTICATED:
//             return auth.isAuthenticated();
//         case actionTypes.LOGOUT:
//             return auth.logout()
//         case actionTypes.LOGOUT_SUCCESS:
//             return action.type
//         default:
//             return state;
//     }
// }
