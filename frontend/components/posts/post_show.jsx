import React from 'react'
import CommentIndexItem from '../comments/commment_index_item'
import { Link } from 'react-router-dom';
import Comment from '../comments/comment_form'
import Likes from '../likes/like'


class PostsShow extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }

    componentDidMount(){
        this.props.fetchpost(this.props.id)
        // this.props.fetchPosts()
        this.props.fetchComments(this.props.id)
        this.props.fetchPostLikes(this.props.id, 'Post')
    }

    

    render(){
        if (!this.props.post) return null;
        const currentUser = this.props.currentUser

        let comments = Object.values(this.props.comments);
        comments = comments.map((comment) => ( 
            <CommentIndexItem key={comment.id}
            className="singleComment"
            comment={comment}
            commentLikes={this.props.fetchPostLikes}
            addPostLike={this.props.addPostLike}
            removePostLike={this.props.removePostLike} />))
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
                {/* <div>{comments}</div> */}
                <div><Likes 
                    postId={this.props.id}
                    addPostLike={this.props.addPostLike}
                    removePostLike={this.props.removePostLike}
                    fetchPostLikes={this.props.fetchPostLikes}
                    currentUser={currentUser}
                    likes={Object.values(this.props.likes)}
                /></div>
                {/* <div>post like: {Object.values(this.props.likes).map(like => like.id)}</div> */}
                <div><Comment
                postId = {this.props.id}
                currentUser ={currentUser}
                addComment = {this.props.addComment}
                fetchComments = {this.props.fetchComments}
                
                /></div>
            <br/>
        </div> 
        )

    }

}

export default PostsShow