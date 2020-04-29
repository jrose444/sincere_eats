
    json.set! @comment.id do
        json.extract! @comment, :id, :user_id, :body, :post_id, :created_at, :author, :likes
    end
