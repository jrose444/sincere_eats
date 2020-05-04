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

ingredients: '1 tablespoon (15ml) canola oil or other neutral oil
4 bone-in, skin-on chicken legs, separated into thighs and drumsticks (about 2 1/2 pounds; 1.15kg)
Kosher salt
8 garlic cloves, thinly sliced
2 whole fresh bay leaves (or 3 whole dried bay leaves)
1 1/2 teaspoons whole black peppercorns
1 1/4 cups (300ml) water
1 cup (240ml) soy sauce
1 cup (240ml) rice vinegar (see note)
Steamed white rice or garlic fried rice, for serving
', 
directions: '
In a heavy-bottomed pot or Dutch oven, heat oil over medium heat until shimmering. Blot chicken dry with paper towels, then season lightly all over with salt.

Working in batches if necessary, add chicken pieces to pot in a single layer, skin side down, making sure not to overcrowd the pot. Cook until well browned, 6 to 7 minutes. Using tongs, flip chicken pieces and cook until lightly brown on the second side, about 3 minutes. Transfer chicken to a plate and set aside.

Add garlic, bay leaves, and peppercorns to now-empty pot and cook, stirring constantly, until mixture is very fragrant and garlic turns a light golden color, about 30 seconds. Add water and stir with a wooden spoon, scraping up any brown bits on the bottom of the pot. Add soy sauce and vinegar, return chicken pieces to pot, increase heat to high, and bring liquid to a boil. Reduce heat to low, cover, and simmer until chicken is cooked through and tender, about 20 minutes, turning the chicken pieces halfway through.

To Serve: The chicken is best served after sitting overnight in the refrigerator (see note), but it can also be served immediately, with steamed white rice or (preferably) garlic fried rice. The chicken pieces can also be briefly broiled before serving.

To Broil Chicken Adobo: Adjust oven rack to 6 inches below broiler element and preheat broiler to high. Transfer chicken pieces to a paper towel–lined rimmed baking sheet and blot surface with more paper towels to remove as much moisture as possible; discard paper towels. Arrange chicken skin side up on the baking sheet and broil until chicken skin is crispy and lightly charred, about 2 minutes (keep an eye on the chicken to ensure it does not burn). Serve immediately with steamed white rice or (preferably) garlic fried rice, passing adobo sauce at the table.', 
author_id: 1)



file1 = open(img_files.shift)
post_1.photo.attach(io: file1, filename:"img_#{1}.jpg")



post_2 = Post.create!(title: 'The Best Slow-Cooked Bolognese Sauce Recipe', 
tagline: 'the world"s best bolognese',
author_id: 1)

file2 = open(img_files.shift)
post_2.photo.attach(io: file2, filename:"img_#{2}.jpg")



post_3 = Post.create!(title: 'Deep-Fried Potato Skins With Melted Raclette Cheese Recipe', 
tagline: 'Crisply fried potato cups, filled with a pool of molten cheese, are about as close to perfection as a food can get.',
author_id: 1)

file3 = open(img_files.shift)
post_3.photo.attach(io: file3, filename:"img_#{3}.jpg")



post_4 = Post.create!(title: 'Easy Pressure Cooker Green Chili With Chicken Recipe', 
tagline: 'Green chili chicken is a fast and easy weeknight meal, loaded with peppers, onions, and chunks of tender chicken.',
author_id: 1)

file4 = open(img_files.shift)
post_4.photo.attach(io: file4, filename:"img_#{4}.jpg")



post_5 = Post.create!(title: 'Smashed Sunchokes With Thyme-Butter Recipe', 
tagline: 'Boiled, smashed, and pan-roasted sunchokes, enriched with butter and thyme, are the perfect side dish for any fall or spring meal.',
author_id: 1)

file5 = open(img_files.shift)
post_5.photo.attach(io: file5, filename:"img_#{5}.jpg")


post_6 = Post.create!(title: 'Grilled Brazilian Cheese Skewers (Espetinhos de Queijo de Coalho) Recipe', 
tagline: 'A popular snack in Brazil, these grilled skewered cheese sticks are easy to make and even easier to eat (maybe a little too easy).',
author_id: 1)

file6 = open(img_files.shift)
post_6.photo.attach(io: file6, filename:"img_#{6}.jpg")


post_7 = Post.create!(title: 'Grilled Skirt Steak Fajitas Recipe', 
tagline: 'Skirt steak is perfect for steak fajitas since it\'s a super beefy cut that\'s delicious when marinated and grilled.',
author_id: 1)

file7 = open(img_files.shift)
post_7.photo.attach(io: file7, filename:"img_#{7}.jpg")


post_8 = Post.create!(title: 'Gold Rush Cocktail Recipe', 
tagline: 'Bourbon, lemon, and honey combine for a cocktail that"s perfect in all seasons.',
author_id: 1)

file8 = open(img_files.shift)
post_8.photo.attach(io: file8, filename:"img_#{8}.jpg")


post_9 = Post.create!(title: 'New York-Style Pizza Sauce Recipe', 
tagline: 'No need to go in search of a slice joint, you can make a New York-style pizza at home any time you want, starting with this faithful and perfectly calibrated recipe for the sauce.',
author_id: 1)


file9 = open(img_files.shift)
post_9.photo.attach(io: file9, filename:"img_#{9}.jpg")




