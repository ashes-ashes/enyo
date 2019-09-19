class AddNickToMessages < ActiveRecord::Migration[5.2]
  def change
    add_column :messages, :nick, :string
  end
end
