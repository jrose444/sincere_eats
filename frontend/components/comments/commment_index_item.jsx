import React from 'react';


debugger;
const CommentIndexItem = ({ comment }) => (
        <div className="comment-index-item">
            <div className='body'>{comment.body} </div>
            <div className='author'>{comment.author.username}</div>
            <div className='time'>{comment.createdAt}</div>
        </div>
);


export default CommentIndexItem