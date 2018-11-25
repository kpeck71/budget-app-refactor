class CreateBudgets < ActiveRecord::Migration[5.1]
  def change
    create_table :budgets do |t|
      t.integer :amount
      t.string :timeframe, :default => "monthly"

      t.timestamps
    end
  end
end
