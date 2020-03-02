class ChangeVintageToBeIntegerInWines < ActiveRecord::Migration[5.2]
  def change
    change_column :wines, :vintage, 'integer USING CAST(vintage AS integer)'
  end
end
