import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postReducer from './posts_reducer';
import commentReducer from './comments_reducer'
import likeReducer from './likes_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postReducer,
    comments: commentReducer,
    likes: likeReducer
});

export default entitiesReducer;