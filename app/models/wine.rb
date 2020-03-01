# == Schema Information
#
# Table name: wines
#
#  id                    :bigint           not null, primary key
#  wineId                :string           not null
#  winery_full           :string           not null
#  wine_full             :string           not null
#  vintage               :string           not null
#  note                  :string           not null
#  taster_initials       :string           not null
#  color                 :string           not null
#  country               :string           not null
#  region                :string           not null
#  score                 :integer          not null
#  price                 :integer          not null
#  alternate_bottle_size :string
#  issue_date            :string           not null
#  top100_year           :integer          not null
#  top100_rank           :integer          not null
#
class Wine < ApplicationRecord
    validates :wineId, :winery_full, :wine_full,
    :vintage, :note, :taster_initials, :color,
    :country, :region, :score, :price, :issue_date,
    :top100_year, :top100_rank, presence: true

    validates :top100_rank, :wineId, uniqueness: true
end
