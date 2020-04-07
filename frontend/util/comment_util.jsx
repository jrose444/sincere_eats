export const makeComment = (comment) => {
    return $.ajax({
        url: `/api/posts/${comment.post_id}/comments`,
        method: 'POST',
        data: { comment }
    });
};

export const fetchComments = postId => {
return $.ajax({
    url: `/api/posts/${postId}/comments`
});
};