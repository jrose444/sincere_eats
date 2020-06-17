import React from 'react'
import CommentIndexItem from '../comments/commment_index_item'
import SidePostIndexItem from './post_show_index_item'
import { Link } from 'react-router-dom';
import Comment from '../comments/comment_form'
import Likes from '../likes/like'


class PostsShow extends React.Component {
    constructor(props) {
        super(props);
    };
    
    componentDidMount(){
        this.props.fetchpost(this.props.id)
        this.props.fetchComments(this.props.id)
        this.props.fetchPostLikes(this.props.id, 'Post')
        this.props.fetchPosts()
    };

    componentDidUpdate(prevProps) {
        debugger;
        if (this.props.id !== prevProps.id) {
            this.props.fetchpost(this.props.id)
            this.props.fetchComments(this.props.id)
            this.props.fetchPostLikes(this.props.id, 'Post')
            this.props.fetchPosts()
        }
    }
    
    render(){
        if (!this.props.post) return null;

        let sidePosts = Object.values(this.props.posts);
        for(let i=0; i < this.props.id; i++){
            sidePosts.push(sidePosts.shift())
        }
        sidePosts = sidePosts.slice(0,5)
        let allSidePosts = <div> 
            {sidePosts.map((post)=>(
            <SidePostIndexItem key={post.id}
            className='side-post'
            post={post}
            />))}
            </div>
        
        const currentUser = this.props.currentUser

        
        let comments = Object.values(this.props.comments);
        let directions = Object.values(this.props.post.directions).map((el) => (
            <div className='single-direction'>{el.body}</div>
        ));
        let ingredients = Object.values(this.props.post.ingredients).map((el) => (
            <div className='single-ingredient'>{el.body}</div>
        ));
        comments = comments.map((comment) => ( 
            <CommentIndexItem key={comment.id}
            className="singleComment"
            comment={comment}
            commentLikes={this.props.fetchPostLikes}
            addPostLike={this.props.addPostLike}
            removePostLike={this.props.removePostLike} />))
        return (
        <div className='post-show-container'> 
            <div className="post-show-body-comments-container">
            <div className='post-body-container'>
                <div className='post-show-title'>{this.props.post.title}</div>
                <div className='post-show-author'>J. Kenji Lopez-Alt</div>
                <div className='post-show-tagline'>{this.props.post.tagline}</div>
                    <div><Likes
                        postId={this.props.id}
                        addPostLike={this.props.addPostLike}
                        removePostLike={this.props.removePostLike}
                        fetchPostLikes={this.props.fetchPostLikes}
                        currentUser={currentUser}
                        likes={Object.values(this.props.likes)} />
                    </div>

                <img className="post-show-image" src={`${this.props.post.photoUrl}`} alt=""/>

                <div className='ingredients-and-directions'>
                    <div className='ingredient-container'>{ingredients}</div>
                    <div className='direction-container'>{directions}</div>
                </div>
            </div>
            <div className='comments-container'>
                <div>{comments}</div>
                
                <div><Comment
                    postId = {this.props.id}
                    currentUser ={currentUser}
                    addComment = {this.props.addComment}
                    fetchComments = {this.props.fetchComments}/>
                </div>
            </div>
            </div>
                {/* <div className='side-posts-and-text'>
                <div className='side-post-text'>Popular Recipes</div> */}
                <div className='all-side-posts'>{allSidePosts}</div>
                {/* </div> */}
        </div> 
        )

    }

}

export default PostsShow