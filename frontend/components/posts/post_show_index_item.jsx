import React from 'react';
import { Link } from 'react-router-dom';

const PostShowIndexItem = ({ post }) => (
    <Link className="post-show-item-link" to={`/posts/${post.id}`}>
        <div className="post-show-index-item">
            <img className='post-show-photo' src={`${post.photoUrl}`}/> 
            <div className='post-show-index-title'>{post.title} </div>
        </div>
    </Link> 
);
export default PostShowIndexItem;
