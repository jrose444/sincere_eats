# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

user = User.create(username: 'Brunna', password: 'brunna123')

Post.create(title: 'food_what_is_it?', author_id: 1)
Post.create(title: 'Hamburgers!?!?', author_id: 1)
Post.create(title: 'I like chicken Parm, and you should too?', author_id: 1)
Post.create(title: 'I am seeding my database, here are some recipes that use seeds', author_id: 1)
Post.create(title: 'Mcdonalds, am I really loving it?', author_id: 1)
Post.create(title: 'Chopping technique, your knife is too dull', author_id: 1)
Post.create(title: 'mooooooo, chocolate milk, mooooo', author_id: 1)
Post.create(title: 'its the final cow-nt down?', author_id: 1)
Post.create(title: 'Big chicken, Big Sheep', author_id: 1)
