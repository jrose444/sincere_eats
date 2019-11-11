import * as postUtil from '../util/post_util'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS'
export const RECEIVE_POST = 'RECEIVE_POST'

export const receivePosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
})

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
})

export const fetchpost = id => dispatch => (
    postUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
)

export const fetchPosts = () => dispatch => (
    postUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
)