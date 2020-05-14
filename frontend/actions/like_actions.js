import * as APIUtil from "../util/like_util";

export const RECEIVE_LIKES = "RECEIVE_LIKES";
export const RECEIVE_LIKE = "RECEIVE_LIKE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const receiveLikes = likes => ({
    type: RECEIVE_LIKES,
    likes
})

const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
})

const removeLike = like => ({
    type: REMOVE_LIKE,
    like
})

export const fetchPostLikes = (postId, type) => dispatch => APIUtil.fetchPostLikes(postId, type)
    .then(likes => dispatch(receiveLikes(likes)))
    
export const addPostLike = (like) => dispatch => APIUtil.addPostLike(like)
    .then(like => dispatch(receiveLike(like)))

export const removePostLike = (postId, userId) => dispatch => APIUtil.removePostLike(postId, userId)
    .then(like => dispatch(removeLike(like)))