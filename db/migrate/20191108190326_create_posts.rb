class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.string :title, null: false
      t.string :tagline
      t.text :body
      t.string :author_name, null: false

      t.timestamps
    end
    add_index :posts, :title
  end
end
