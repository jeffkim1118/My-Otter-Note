class User < ApplicationRecord
    has_secure_password
    has_many :notes
    validates :email, uniqueness: true
    validates :username, uniqueness: true
end
