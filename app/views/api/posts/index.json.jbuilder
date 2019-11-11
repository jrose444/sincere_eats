@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :title, :author_id, :body
    end

end
