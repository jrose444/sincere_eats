import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => (
    <Link className="post-item-link" to={`/posts/${post.id}`}>
    <div className="post-index-item">
        <img className='photo' src={`${post.photoUrl}`}/> 
        <div className='post-index-title'>{post.title} </div>
        <div className='tag'>{post.tagline}</div>
        
    </div>
    </Link> 
);
export default PostIndexItem;
