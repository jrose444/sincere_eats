import React from 'react';


const CommentIndexItem = ({ comment }) => (
        <div className="comment-index-item">
            <div className='body'>{comment.body} </div>
            <div className='author'>{comment.author.username}</div>
            <div className='time'>{comment.createdAt}</div>
        <div className='likes'>liked: {Object.values(comment.likes).map(like => like.id)}</div>
        </div>
);


export default CommentIndexItem