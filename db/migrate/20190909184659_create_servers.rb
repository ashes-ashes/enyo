class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :name, null: false
      t.integer :owner_id, null: false
      t.string :invite_code, null: false, unique: true
      t.boolean :is_home, null: false, default: false

      t.index :owner_id
      t.index :name
      t.index :invite_code, unique: true

      t.timestamps
    end
  end
end
