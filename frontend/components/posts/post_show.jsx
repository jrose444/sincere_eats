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
        console.log(this.props.post)
        return (
        <div>  
            
                <h1>{this.props.post.title}</h1>
                <br/>
                <br/>
                <div>{this.props.post.tagline}</div>
                <br/>
                <img className="show-image" src={`${this.props.post.photoUrl}`} alt=""/>
                <br/>
                <div>{this.props.post.body}</div>
                <br/>
                <div>{this.props.post.ingredients}</div>
                <br/>
                <div>{this.props.post.directions}</div>
            <br/>
            <Link to="/">Posts</Link>
        </div> 
        )

    }

}

export default PostsShow