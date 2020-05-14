class CreateDirections < ActiveRecord::Migration[5.2]
  def change
    create_table :directions do |t|
    t.text :body, null: false
    t.integer :post_id, null: false
      t.timestamps
    end
    add_index :directions, :post_id
  end
end
