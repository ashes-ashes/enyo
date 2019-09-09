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

require 'test_helper'

class ServerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
