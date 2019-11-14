import React from 'react';
import { Link } from 'react-router-dom';

const PostIndexItem = ({ post }) => (
    <li className="post-index-item">
        <div> <Link to={`/posts/${post.id}`}>{post.title}</Link> </div>
    </li>
);

export default PostIndexItem;
