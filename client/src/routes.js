import React from 'react';
import {Route, Router} from 'react-router-dom';
import Auth from './components/auth/Auth';
import Callback from './components/callback/Callback';
import history from './components/auth/history';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}
