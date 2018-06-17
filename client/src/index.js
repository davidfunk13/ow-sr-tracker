import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// import Auth from './Auth';
import { Provider } from 'react-redux';
import configureStore from './store';
import { BrowserRouter } from 'react-router-dom';

// const auth = new Auth();
const store = configureStore();

// let state = {};
// window.setState = (changes) => {
    // state = Object.assign({}, state, changes)
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
            </Provider>,
        document.getElementById('root'));
// }

/* eslint no-restricted-globals: 0*/

// let getUserProfile = auth.getProfile();

// let initialState = {
    // owSrTrackInfo: {
        // infoSaved: false,
        // accounts: [],
    // },
    // user: getUserProfile,
    // location: location.pathname.replace(/^\/?|\/$/g, ""),
    // auth,
// }
// console.log(store)
// window.setState(initialState);

registerServiceWorker();
