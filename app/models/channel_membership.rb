# == Schema Information
#
# Table name: channel_memberships
#
#  id         :bigint           not null, primary key
#  user_id    :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelMembership < ApplicationRecord

    belongs_to :user,
        foreign_key: :user_id,
        class_name: "User"

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: "Channel"

end
