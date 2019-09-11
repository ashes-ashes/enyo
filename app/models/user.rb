# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord

    attr_reader :password

    after_initialize :ensure_session_token

    before_save :downcase_email

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validate :email_is_valid
    validates :password, length: {minimum: 6, allow_nil: true}


    has_many :owned_servers,
    foreign_key: :user_id,
    class_name: "Server"
    
    has_many :server_memberships,
    foreign_key: :user_id,
    class_name: "ServerMembership",
    dependent: :destroy
    
    has_many :servers,
    through: :server_memberships,
    source: :server
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def downcase_email
        self.email = self.email.downcase
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email.downcase)
        return nil if !user
        user.is_password?(password) ? user : nil
    end

    private 

    def email_is_valid
        if !(/^[\w\+]+\@\w+\.\w+$/ =~ self.email)
            self.errors.add(:email, 'must be valid')
        end
    end
    

end
