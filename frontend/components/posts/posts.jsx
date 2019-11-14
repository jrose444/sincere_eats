import React from 'react';
import {withRouter} from 'react-router';
import PostIndexItem from './post_index_item';
import { ProtectedRoute } from '../../util/route_util';
import PostShowContainer from './post_show_container';

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        // debugger
        this.props.banana()
    }

    update(field) {
        // return e => this.setState({
        //     [field]: e.target.value
        // })
    }

    render(){
        // debugger

        let posts = <div className='mappedPosts'>
        
        
        {Object.values(this.props.posts).map
                (post => <PostIndexItem key={post.id}
                    className="singlePost" post={post} />)}
                </div>
            // mapping over array and creating <PostIndexItem post={post}/> for each post 

            // <img className="burger-photo"
            //     src="https://sincere-eats-dev.s3-us-west-1.amazonaws.com/serious_eats_burger.jpg" alt="" />

        return(
            <div>
                {posts}
            </div>
        )
    }


}

export default Posts;