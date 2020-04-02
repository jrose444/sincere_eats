import { connect } from 'react-redux'
import Posts from './posts'
import { fetchPosts } from '../../actions/post_actions'

const mapStateToProps = (state) => {
    return {
        posts: state.entities.posts //make into array
    }
}

const mapDispatchToProps = dispatch => ({
    banana: () => dispatch(fetchPosts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Posts)