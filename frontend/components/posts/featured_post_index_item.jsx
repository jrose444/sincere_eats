import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedPostIndexItem = ({ post }) => (
    <Link className="featured-post-item-link" to={`/posts/${post.id}`}>
        <div className="featured-container">
            <img className='featured-photo' src={`${post.photoUrl}`} />
            <div className='featured-words'>
                <div className="featured-title">{post.title} </div>
            </div>
        </div>
    </Link>
);
export default FeaturedPostIndexItem;
