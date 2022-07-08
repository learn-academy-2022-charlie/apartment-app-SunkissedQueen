class AddUsernameToUser < ActiveRecord::Migration[7.0]
  def change
    # add_column :table, :column_name, :data_type
    add_column :users, :username, :string
  end
end
