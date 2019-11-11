import {connect} from 'react-redux'
import Post from './post'
import { fetchPosts } from '../../actions/post_actions'

const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts
    }
}

const mapDispatchToProps = dispatch => ({
    banana: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Post)