class Post < ApplicationRecord

    validates :title, presence: true

    has_many :comments

    has_many :directions
    has_many :ingredients

    has_many :likes, as: :likeable, dependent: :destroy

    has_one_attached :photo

end


# {
#     "Version": "2012-10-17",
#     "Statement": [
#         {
#             "Sid": "Stmt1420751757000",
#             "Effect": "Allow",
#             "Principal": {
#                 "AWS": "arn:aws:iam::153393300776:user/sincere-eats-master"
#             },
#             "Action": "s3:*",
#             "Resource": [
#                 "arn:aws:s3:::sincere-eats-dev",
#                 "arn:aws:s3:::sincere-eats-dev/*"
#             ]
#         }
#     ]
# }
# post.photo.attach(io: open('https://sincere-eats-dev.s3-us-west-1.amazonaws.com/serious_eats_burger.jpg'), filename: 'serious_eats_burger.jpg')