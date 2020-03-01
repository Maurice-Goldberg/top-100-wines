class Api::WinesController < ApplicationController 
    def index
        @wines = Wine.all
        render "api/index"
    end
end