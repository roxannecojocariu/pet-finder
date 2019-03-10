require 'net/http'

require 'pry'

class Api::V1::FetchedPetsController < ApplicationController

  def index
    pets = FetchedPet.new
    render json: pets.pet_finder_search
  end

  def show
    render json: { pets: @all_pets }
  end
end


#need to figure out how to display individual pets now.  something.all

#if i create a database and add pets to my database, what happens when a pet gets adopted and my app still has the pet?

#
