class AddCategoryToGoals < ActiveRecord::Migration[5.1]
  def change
    add_column :goals, :category, :string
  end
end
