require 'net/http'

require 'pry'

class Api::V1::FetchedPetsController < ApplicationController

  def index
    pets = FetchedPet.new
    render json: pets.pet_finder_search
  end
end
