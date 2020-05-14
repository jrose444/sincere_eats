@directions.each do |direction|
    json.set! direction.id do
        json.extract! direction, :id, :post_id, :body
    end
end