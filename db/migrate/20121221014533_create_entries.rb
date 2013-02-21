class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :name
      t.string :email
      t.string :caption
      t.string :image

      t.timestamps
    end
  end
end
