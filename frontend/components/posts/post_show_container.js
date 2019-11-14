import { connect } from 'react-redux'
import { fetchpost, fetchPosts } from '../../actions/post_actions'
import PostShow from './post_show'


const mapStateToProps = (state, ownProps) => {
    debugger
    return {
        post: state.entities.posts[ownProps.match.params.mango],
        id: ownProps.match.params.mango
    }
}

const mapDispatchToProps = dispatch => ({
    fetchpost: (id) => dispatch(fetchpost(id)),
    fetchPosts: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)