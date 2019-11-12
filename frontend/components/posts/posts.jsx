import React from 'react';
import {withRouter} from 'react-router';

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

        let posts = <div className='mappedPosts'>{Object.values(this.props.posts).map
            (posts => <div key={posts.id}
                className="singlePost">{posts.title} <img className="burger-photo" src="https://sincere-eats-dev.s3-us-west-1.amazonaws.com/serious_eats_burger.jpg" alt=""/></div>)}</div>
            //mapping over array and creating <PostIndexItem post={post}/> for each post 
        return(
            posts
        )
    }


}

export default Posts;