require 'net/http'
require 'pry'

class Api::V1::FetchedPetsController < ApplicationController

  def index
    uri = URI("http://api.petfinder.com/pet.find?key=#{ENV["PET_FINDER_API_KEY"]}&animal=dog&location=08093&format=json")

    Net::HTTP.start(uri.host, uri.port) do |http|
      request = Net::HTTP::Get.new uri
      binding.pry
      response = http.request request

      render json: response.body
    end
  end
end
