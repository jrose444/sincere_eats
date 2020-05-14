json.extract! @post, :id, :title, :body, :tagline, :likes, :directions, :ingredients
json.photo_url url_for(@post.photo)
# @post.comments.each do |comment|
  # json.set! comment.id do
    # json.extract! comment, :id, :body, :post_id, :user_id, :author, :created_at
  # end
# end