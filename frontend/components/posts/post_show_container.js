import { connect } from 'react-redux'
import { fetchpost, fetchPosts } from '../../actions/post_actions'
import {fetchComments, addComment} from '../../actions/comment_actions'
import {fetchPostLikes, addPostLike, removePostLike} from '../../actions/like_actions'
import PostShow from './post_show'


const mapStateToProps = (state, ownProps) => {
    return {
        post: state.entities.posts[ownProps.match.params.mango],
        id: ownProps.match.params.mango,
        comments: state.entities.comments,
        likes: state.entities.likes,
        currentUser: state.entities.users[state.session.id],
        posts: state.entities.posts
    }
}

const mapDispatchToProps = dispatch => ({
    fetchpost: (id) => dispatch(fetchpost(id)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: (postId) => dispatch(fetchComments(postId)),
    addComment: (comment) => dispatch(addComment(comment)),
    fetchPostLikes: (postId, type) => dispatch(fetchPostLikes(postId, type)),
    addPostLike: (like) => dispatch(addPostLike(like)),
    removePostLike: (postId, userId) => dispatch(removePostLike(postId, userId)) 
    
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)