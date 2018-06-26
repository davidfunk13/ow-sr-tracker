import React from 'react';
import { Route, Router } from 'react-router-dom';
import Callback from './Components/Callback/Callback';
import Auth from './Components/Auth/Auth';
import history from './Components/Auth/history';
import Menu from './Pages/Menu/Menu';
import Header from './Components/Header/Header'
import Main from './Components/Main/Main';
import NotFound from './Components/NotFound/NotFound';
import Account from './Pages/Account/Account';

const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }

export const makeMainRoutes = () => {

  return (
    <Router history={history}>
      <div>
        <Route exact path="/" render={(props) =>
          auth.isAuthenticated() ?
            <div>
              <Header profile={auth.getProfile()} auth={auth} {...props} />
              <Main profile={auth.getProfile()} auth={auth} {...props} />
            </div>
            :
            <div>
              <Header profile={auth.getProfile()} auth={auth} {...props} />
              <NotFound />
            </div>}
        />
        <Route path="/callback" render={(props) => {
          // handleAuthentication(props)
          return <Callback auth={auth} {...props} />
        }}
        />
        <Route exact path='/menu' render={(props) =>
          auth.isAuthenticated() ?
            <div>
              <Header profile={auth.getProfile()} auth={auth} {...props} />
              <Menu profile={auth.getProfile()} auth={auth} {...props} />
            </div>
            :
            <div>
              <Header profile={auth.getProfile()} auth={auth} {...props} />
              <NotFound />
            </div>
        }
        />
        <Route exact path='/accounts' render={(props) =>
          auth.isAuthenticated() ?
            <div>
              <Header profile={auth.getProfile()} auth={auth} {...props} />
              <Account profile={auth.getProfile()} auth={auth} {...props} />
            </div>
            :
            <div>
              <Header profile={auth.getProfile()} auth={auth} {...props} />
              <NotFound />
            </div>
        }
        />
      </div>
    </Router>
  );
}