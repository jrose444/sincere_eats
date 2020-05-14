json.set! @direction.id do
        json.extract! @direction, :id, :body, :post_id
    end
