@posts.each do |post|
    json.set! post.id do
        json.extract! post, :id, :title, :body, :tagline, :ingredients, :directions, :likes
        if(post.photo.attached?)
            json.photo_url url_for(post.photo)
        else
            json.photo_url ""
        end
    end

end
