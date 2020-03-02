class ChangeVintageToBeStringInWines < ActiveRecord::Migration[5.2]
  def change
    change_column :wines, :vintage, :string
  end
end
