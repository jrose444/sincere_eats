json.set! @ingredient.id do
        json.extract! @ingredient, :id, :body, :post_id
    end
