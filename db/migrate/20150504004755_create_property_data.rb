class CreatePropertyData < ActiveRecord::Migration
  def change
    create_table :property_data do |t|
      t.integer :property_id
      t.string :data_key
      t.text :data_value

      t.timestamps
    end
  end
end
