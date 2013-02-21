class CreateCampaigns < ActiveRecord::Migration
  def change
    create_table :campaigns do |t|
      t.string :name
      t.integer :campaign_type_id

      t.timestamps
    end
  end
end
