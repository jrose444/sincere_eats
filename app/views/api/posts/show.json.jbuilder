json.extract! @post, :id, :title, :author_id, :body
json.photo_url url_for(@post.photo)