import React from 'react';


const CommentIndexItem = ({ comment }) => (
    <div className="comment-index-item">
        <div className='author-time'>
            <div className='author'>{comment.author.username}</div>
            <div className='time'>{dateConverter(comment.createdAt)}</div>
        </div>
        <div className='comment-body'>{comment.body} </div>
        {/* <div className='likes'>liked: {Object.values(comment.likes).map(like => like.id)}</div> */}
    </div>
);


export default CommentIndexItem

const dateConverter = (string) => {
    let date = string.slice(0,10);
    let time = string.slice(11,20);
    let timeOfDay = 'AM';
    let newDate = date[5]+date[6] + '/' + date[8]+date[9] + '/' + date.slice(0,4);
    let newHour = parseInt(time.slice(0,2));
        if(newHour > 12) {
            newHour -= 12;
            timeOfDay = 'PM'
        };
        if(newHour === 0) newHour = 12;
    newHour = newHour.toString();
    let minutes = time.slice(3,5);
    return `${newHour}:${minutes} ${timeOfDay} on ${newDate}`;
}

//2020-05-07T19:18:14.829Z

//date converter example 4:44 PM on 3/22/2016