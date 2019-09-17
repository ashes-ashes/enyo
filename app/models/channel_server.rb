# == Schema Information
#
# Table name: channel_servers
#
#  id         :bigint           not null, primary key
#  channel_id :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelServer < ApplicationRecord

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: "Channel"

    belongs_to :server,
        foreign_key: :server_id,
        class_name: "Server"

end
