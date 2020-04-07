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
        this.props.fetchComments(this.props.id)
    }

    

    render(){
        if (!this.props.post) return null;
        const comments = Object.values(this.props.comments)
        console.log(this.props.post)
        debugger;
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
                <br />
                <div>
                {comments.map((comment)=> {comment.body})}</div>
            <br/>
        </div> 
        )

    }

}

export default PostsShow