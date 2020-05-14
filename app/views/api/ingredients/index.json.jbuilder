@ingredients.each do |ingredient|
    json.set! ingredient.id do
        json.extract! ingredient, :id, :post_id,:body
    end
end