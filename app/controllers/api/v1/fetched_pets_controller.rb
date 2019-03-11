require 'net/http'

require 'pry'

class Api::V1::FetchedPetsController < ApplicationController

  def index
    uri = URI("http://api.petfinder.com/pet.find?key=#{ENV["PET_FINDER_API_KEY"]}&animal=dog&location=#{params[:location]}&format=json")

    Net::HTTP.start(uri.host, uri.port) do |http|
      request = Net::HTTP::Get.new uri
      response = http.request request
      json_string = response.body
      @json_object = JSON.parse(json_string)
      pets = FetchedPet.data_grab(@json_object["petfinder"])

      render json: pets
    end
  end

  # def create
  #   puts params
  #   binding.pry
  # end
end
