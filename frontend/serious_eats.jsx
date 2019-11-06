import React from "react";
import Root from './components/root'
import ReactDOM from "react-dom";
// import { signup, login, logout } from './util/session_api_util';
import {signup, login, logout} from './actions/session_actions'
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.current_user
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch; 
    ReactDOM.render(<Root store = {store} />, root);
});