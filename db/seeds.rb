# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create!([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create!(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Post.destroy_all
Direction.destroy_all
Ingredient.destroy_all
Comment.destroy_all

img_files = ['https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a1-Filipino.jpg', 
'https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a2-bolognese.jpg',
'https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a1-potatoes.jpg',
'https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a1-chili.jpg',
'https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a1-sunchokes.jpg',
'https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a1-cheese.jpg',
'https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a1-fajita.jpg',
'https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a1-cocktail.jpg',
'https://sincere-eats-seeds-dev.s3-us-west-1.amazonaws.com/a1-pizzasauce.jpg'
]

user = User.create!(username: 'Brunna', password: 'brunna123', email: "Brunna@gmail.com")

post_1 = Post.create!(title: 'Filipino-Style Chicken Adobo Recipe', 
tagline: 'Chicken adobo is a classic Filipino dish that is as savory as it is bright with acid, and it goes perfectly with a large platter of garlic fried rice.', 
body: 'Chicken adobo is a classic dish in the cuisine of the Philippines, one that predates any external influence. This version is based on a more modern iteration, using soy sauce to provide savory depth and rice vinegar for adobo"s signature acidity. Browning the meat, while optional, improves the depth of flavor in both the chicken and the sauce, and you can take that even further by broiling the braised chicken after it"s fully cooked.

Why It Works
Browning the chicken and deglazing the pot with water add an extra layer of savory flavor to both the meat and the sauce.
Blooming the garlic, peppercorns, and bay leaves in the rendered chicken fat releases their aromatic oils into the sauce.', 


author_name: 'Brunna')



file1 = open(img_files.shift)
post_1.photo.attach(io: file1, filename:"img_#{1}.jpg")



post_2 = Post.create!(title: 'The Best Slow-Cooked Bolognese Sauce Recipe', 
tagline: 'the world"s best bolognese',
author_name: 'Brunna')

file2 = open(img_files.shift)
post_2.photo.attach(io: file2, filename:"img_#{2}.jpg")



post_3 = Post.create!(title: 'Deep-Fried Potato Skins With Melted Raclette Cheese Recipe', 
tagline: 'Crisply fried potato cups, filled with a pool of molten cheese, are about as close to perfection as a food can get.',
author_name: 'Brunna')

file3 = open(img_files.shift)
post_3.photo.attach(io: file3, filename:"img_#{3}.jpg")



post_4 = Post.create!(title: 'Easy Pressure Cooker Green Chili With Chicken Recipe', 
tagline: 'Green chili chicken is a fast and easy weeknight meal, loaded with peppers, onions, and chunks of tender chicken.',
author_name: 'Brunna')

file4 = open(img_files.shift)
post_4.photo.attach(io: file4, filename:"img_#{4}.jpg")



post_5 = Post.create!(title: 'Smashed Sunchokes With Thyme-Butter Recipe', 
tagline: 'Boiled, smashed, and pan-roasted sunchokes, enriched with butter and thyme, are the perfect side dish for any fall or spring meal.',
author_name: 'Brunna')

file5 = open(img_files.shift)
post_5.photo.attach(io: file5, filename:"img_#{5}.jpg")


post_6 = Post.create!(title: 'Grilled Brazilian Cheese Skewers (Espetinhos de Queijo de Coalho) Recipe', 
tagline: 'A popular snack in Brazil, these grilled skewered cheese sticks are easy to make and even easier to eat (maybe a little too easy).',
author_name: 'Brunna')

file6 = open(img_files.shift)
post_6.photo.attach(io: file6, filename:"img_#{6}.jpg")


post_7 = Post.create!(title: 'Grilled Skirt Steak Fajitas Recipe', 
tagline: 'Skirt steak is perfect for steak fajitas since it\'s a super beefy cut that\'s delicious when marinated and grilled.',
author_name: 'Brunna')

file7 = open(img_files.shift)
post_7.photo.attach(io: file7, filename:"img_#{7}.jpg")


post_8 = Post.create!(title: 'Gold Rush Cocktail Recipe', 
tagline: 'Bourbon, lemon, and honey combine for a cocktail that"s perfect in all seasons.',
author_name: 'Brunna')

file8 = open(img_files.shift)
post_8.photo.attach(io: file8, filename:"img_#{8}.jpg")


post_9 = Post.create!(title: 'New York-Style Pizza Sauce Recipe', 
tagline: 'No need to go in search of a slice joint, you can make a New York-style pizza at home any time you want, starting with this faithful and perfectly calibrated recipe for the sauce.',
author_name: 'Brunna')


file9 = open(img_files.shift)
post_9.photo.attach(io: file9, filename:"img_#{9}.jpg")




