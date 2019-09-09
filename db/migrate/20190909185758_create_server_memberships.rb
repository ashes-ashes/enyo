class CreateServerMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :server_memberships do |t|
      t.integer :user_id, null: false
      t.integer :server_id, null: false
      t.string :nickname

      t.index :user_id
      t.index :server_id
      t.index [:user_id, :server_id], unique: true

      t.timestamps
    end
  end
end
