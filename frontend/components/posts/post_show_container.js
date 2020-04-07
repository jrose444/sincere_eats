import { connect } from 'react-redux'
import { fetchpost, fetchPosts } from '../../actions/post_actions'
import PostShow from './post_show'


const mapStateToProps = (state, ownProps) => {
    return {
        post: state.entities.posts[ownProps.match.params.mango],
        id: ownProps.match.params.mango,
        comments: state.entities.comments
    }
}

const mapDispatchToProps = dispatch => ({
    fetchpost: (id) => dispatch(fetchpost(id)),
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: (postId) => dispatch(fetchComments(postId))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)