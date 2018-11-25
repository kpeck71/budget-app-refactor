class CreateExpenses < ActiveRecord::Migration[5.1]
  def change
    create_table :expenses do |t|
      t.string :title
      t.string :amount
      t.text :category
      t.string :timeframe, :default => "monthly"

      t.timestamps
    end
  end
end
