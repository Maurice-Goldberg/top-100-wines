@wines.each do |wine|
    json.set! wine.wineId.to_i do
        json.extract! wine, :wineId, :winery_full, :wine_full,
            :vintage, :note, :taster_initials, :color,
            :country, :region, :score, :price, :issue_date,
            :top100_year, :top100_rank, :alternate_bottle_size
    end
end