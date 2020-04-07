json.extract! @post, :id, :title, :author_id, :body
json.photo_url url_for(@post.photo)
json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.partial! 'comment', comment: comment
    end
  end
end