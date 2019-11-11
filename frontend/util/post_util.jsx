export const fetchPosts = () => (
    $.ajax({
        url: 'api/posts'
    })
);

export const fetchPost = id => (
    $.ajax({
        url: `api/posts/${id}`
    })
);
