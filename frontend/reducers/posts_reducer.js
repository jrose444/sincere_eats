import {
    RECEIVE_POST,
    RECEIVE_ALL_POSTS
} from '../actions/post_actions'

const postReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            return action.posts
        case RECEIVE_POST:
            const newPost = { [action.post.id]: action.post };
            return Object.assign({}, state, newPost);
        default:
            return state;
    }
}

export default postReducer;