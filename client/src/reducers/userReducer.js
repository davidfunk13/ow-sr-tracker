import Auth from '../Auth';
import actionTypes from '../actions/actionTypes';
// import initialState from './initialState';

const auth = new Auth();

const userReducer = (
    state = {
      isAuthenticated: auth.isAuthenticated(),
      isFetching: false,
      profile: auth.getProfile(),
      error: null
    },
    action
  ) => {
    switch (action.type) {
      case actionTypes.LOGIN:
        return {
          ...state,
          isFetching: true,
          error: null
        };
      case actionTypes.LOGIN_SUCCESS:
        return {
          ...state,
          isFetching: false,
          isAuthenticated: true,
          profile: action.payload.profile
        };
      case actionTypes.LOGIN_FAILURE:
        return {
          ...state,
          isFetching: false,
          isAuthenticated: false,
          profile: {},
          error: action.error
        };
      case actionTypes.LOGOUT_SUCCESS:
        return {
          ...state,
          isAuthenticated: false,
          profile: {}
        };
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
