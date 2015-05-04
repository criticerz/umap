class CreateProperties < ActiveRecord::Migration
  def change
    create_table :properties do |t|
      
      t.integer :user_id
      t.decimal :coordinate_lat, :precision => 10, :scale => 6
      t.decimal :coordinate_lng, :precision => 10, :scale => 6
      t.string :name

      t.string :property_data

      t.timestamps
    end
  end
end
