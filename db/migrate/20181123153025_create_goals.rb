class CreateGoals < ActiveRecord::Migration[5.1]
  def change
    create_table :goals do |t|
      t.string :title
      t.integer :amount
      t.text :description
      t.integer :amount_paid
      t.boolean :paid, :default => false

      t.timestamps
    end
  end
end
