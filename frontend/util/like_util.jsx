export const fetchPostLikes = (postId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}/likes`,
    })
}

export const fetchUserLike = (postId, type) => {
    return $.ajax({
        method: 'GET',
        url: `/api/posts/${postId}/likes`,
        data: type
    })
}

export const addPostLike = like => {

    return $.ajax({
        method: 'POST',
        url: `/api/posts/${like.likeable_id}/likes`,
        data: { like }
    })
}


export const removePostLike = (postId, id) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/posts/${postId}/likes/${id}`
        // data: { postId, userId }
    })
)