# == Schema Information
#
# Table name: servers
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  owner_id    :integer          not null
#  invite_code :string           not null
#  is_home     :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Server < ApplicationRecord

    after_initialize :ensure_invite_code

    belongs_to :owner,
        foreign_key: :owner_id,
        class_name: "User"

    has_many :memberships,
        foreign_key: :server_id,
        class_name: "ServerMembership",
        dependent: :destroy

    has_many :members,
        through: :memberships,
        source: :user

    def ensure_invite_code
        self.reset_invite_code! if !!self.invite_code
    end

    def reset_invite_code!
        code = ""
        until code != Server.find_by(invite_code: code)
            code = SecureRandom.urlsafe_base64(10)
        end
        self.invite_code = code
    end

end
