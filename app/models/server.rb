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

end
