import React from "react";
import Root from './components/root'
import ReactDOM from "react-dom";
// import { signup, login, logout } from './util/session_api_util';
import {signup, login, logout} from './actions/session_actions'
import {fetchpost, fetchPosts} from './actions/post_actions'
import {fetchPostLikes, fetchUserLike, addPostLike, removePostLike} from './actions/like_actions'
import {fetchComments, addComment} from './actions/comment_actions'
import configureStore from './store/store'
import {makeComment} from './util/comment_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.current_user
    // window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.login = login;
    // window.signup = signup;
    // window.logout = logout;
    // window.getState = store.getState;
    // window.dispatch = store.dispatch; 
    // window.fetchPosts = fetchPosts;
    // window.fetchpost = fetchpost
    // window.fetchComments = fetchComments
    // window.addComment = addComment
    // window.makeComment = makeComment
    window.fetchPostLikes = fetchPostLikes
    // window.fetchUserLike = fetchUserLike
    window.addPostLike = addPostLike
    window.removePostLike = removePostLike


    ReactDOM.render(<Root store = {store} />, root);
});