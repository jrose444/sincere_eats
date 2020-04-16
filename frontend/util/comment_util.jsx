export const makeComment = comment => {
    // debugger;
    return $.ajax({
        url: `/api/posts/${comment.postId}/comments`,
        method: 'POST',
        data: comment
    });
};

export const fetchComments = postId => {
return $.ajax({
    url: `/api/posts/${postId}/comments`
});
};