# == Schema Information
#
# Table name: channels
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  private     :boolean          default(FALSE), not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ApplicationRecord

    has_many :memberships,
        foreign_key: :channel_id,
        class_name: "ChannelMembership",
        dependent: :destroy

    has_many :members,
        through: :memberships,
        source: :user

    has_many :channel_servers,
        foreign_key: :channel_id,
        class_name: "ChannelServer",
        dependent: :destroy

    has_many :servers,
        through: :channel_servers,
        source: :server

    has_many :messages,
        foreign_key: :channel_id,
        class_name: 'Message',
        dependent: :destroy

end
