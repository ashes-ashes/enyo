# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  channel_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  nick       :string
#

class Message < ApplicationRecord
    
    belongs_to :author,
        foreign_key: :author_id,
        class_name: 'User'

    belongs_to :channel,
        foreign_key: :channel_id,
        class_name: 'Channel'

end
