import React from 'react'
import { Link } from 'react-router-dom';


class PostsShow extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    componentDidMount(){
        this.props.fetchpost(this.props.id)
        this.props.fetchPosts()
    }

    render(){
        if (!this.props.post) return null;
        return (
        <div>  
                <h1>{this.props.post.title}</h1>
            <br/>
            <Link to="/">Posts</Link>
        </div> 
        )

    }

}

export default PostsShow