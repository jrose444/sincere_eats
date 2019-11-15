import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => (
    <div className="post-index-item">
        <img className='photo' src={`${post.photoUrl}`}/> 
        <div className='title'> <Link to={`/posts/${post.id}`}>{post.title}</Link> </div>
        <div className='tag'>{post.tagline}</div>
        
    </div>
);

export default PostIndexItem;
