class CreateBriefs < ActiveRecord::Migration
  def change
    create_table :briefs do |t|
      t.string :title
      t.string :image
      t.string :video
      t.string :caption

      t.timestamps
    end
  end
end
