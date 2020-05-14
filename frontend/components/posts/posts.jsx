import React from 'react';
import {withRouter} from 'react-router';
import PostIndexItem from './post_index_item';
import FeaturedPostIndexItem from './featured_post_index_item'
import { ProtectedRoute } from '../../util/route_util';
import PostShowContainer from './post_show_container';

class Posts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.banana()
    }

    update(field) {
        // return e => this.setState({
        //     [field]: e.target.value
        // })
    }

    render(){
        // let postArray = Object.values(this.props.posts)
        debugger;
        console.log(this.props.posts)
        let postsArray = Object.values(this.props.posts)
        console.log(Object.values(this.props.posts))
        let posts = <div className='mappedPosts'>
        
        {postsArray.map
                (post => <PostIndexItem key={post.id}
                    className="singlePost" post={post} />)}
                </div>

        let featuredPosts1 = <div className='featured-posts-1'>

            {Object.values(this.props.posts).slice(0, 1).map
                ((post, i) => <FeaturedPostIndexItem key={post.id}
                    className='featuredSinglePosts1' post={post} i={i} />)}
        </div>

        let featuredPosts23 = <div className='featured-posts-23'>

            {Object.values(this.props.posts).slice(1,3).map
                ((post, i) => <FeaturedPostIndexItem key={post.id}
                    className='featuredSinglePosts12' post={post} i={i} />)}
        </div>
            // mapping over array and creating <PostIndexItem post={post}/> for each post 

            // <img className="burger-photo"
            //     src="https://sincere-eats-dev.s3-us-west-1.amazonaws.com/serious_eats_burger.jpg" alt="" />

        return(
            <div>
                <div className='featured-posts'>
                    <div className='featured-posts-1'>{featuredPosts1}</div>
                    <div className='featured-posts-23'>{featuredPosts23}</div>
                </div>
                <div>{posts}</div>
                
            </div>
        )
    }


}

export default Posts;