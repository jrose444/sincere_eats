import { connect } from 'react-redux'
import { fetchpost, fetchPosts } from '../../actions/post_actions'
import {fetchComments, addComment} from '../../actions/comment_actions'
import PostShow from './post_show'


const mapStateToProps = (state, ownProps) => {
    return {
        post: state.entities.posts[ownProps.match.params.mango],
        id: ownProps.match.params.mango,
        comments: state.entities.comments,
        currentUser: state.entities.users[state.session.id],
    }
}

const mapDispatchToProps = dispatch => ({
    fetchpost: (id) => dispatch(fetchpost(id)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: (postId) => dispatch(fetchComments(postId)),
    addComment: (comment) => dispatch(addComment(comment))
    
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)