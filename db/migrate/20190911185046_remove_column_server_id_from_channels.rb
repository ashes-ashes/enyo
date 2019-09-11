class RemoveColumnServerIdFromChannels < ActiveRecord::Migration[5.2]
  def change
    remove_column :channels, :server_id
  end
end
