import * as commentUtil from '../util/comment_util'

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComments = comments => ({
    type: RECEIVE_ALL_COMMENTS,
    comments
})

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
})
export const fetchComments = postId => dispatch => (commentUtil.fetchComments(postId)
.then(comments => dispatch(receiveComments(comments)))
)

export const addComment = comment => dispatch => commentUtil.makeComment(comment)
    .then(comment => dispatch(receiveComment(comment)))