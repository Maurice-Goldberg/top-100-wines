# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_03_01_161847) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "wines", force: :cascade do |t|
    t.string "wineId", null: false
    t.string "winery_full", null: false
    t.string "wine_full", null: false
    t.string "vintage", null: false
    t.string "note", null: false
    t.string "taster_initials", null: false
    t.string "color", null: false
    t.string "country", null: false
    t.string "region", null: false
    t.integer "score", null: false
    t.integer "price", null: false
    t.string "alternate_bottle_size"
    t.string "issue_date", null: false
    t.integer "top100_year", null: false
    t.integer "top100_rank", null: false
  end

end
