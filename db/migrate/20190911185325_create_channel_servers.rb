class CreateChannelServers < ActiveRecord::Migration[5.2]
  def change
    create_table :channel_servers do |t|
      t.integer :channel_id, null: false
      t.integer :server_id, null: false

      t.index :channel_id
      t.index :server_id
      t.index [:channel_id, :server_id], unique: true

      t.timestamps
    end
  end
end
