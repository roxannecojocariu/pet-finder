require 'net/http'
require 'pry'
class FetchedPet

  def pet_finder_search
    uri = URI("http://api.petfinder.com/pet.find?key=#{ENV["PET_FINDER_API_KEY"]}&animal=dog&location=02116&format=json")

    Net::HTTP.start(uri.host, uri.port) do |http|
      request = Net::HTTP::Get.new uri
      response = http.request request
      json_string = response.body
      @json_object = JSON.parse(json_string)
      data_grab(@json_object["petfinder"])
    end
  end

  def data_grab(data_set)
    i = 0
    @all_pets = []
    while i < data_set["lastOffset"]["$t"].to_i
      details = data_set["pets"]["pet"][i]
      summary = Hash.new
      summary["name"] = details["name"]["$t"]
      summary["age"] = details["age"]["$t"]
      @all_pets << summary
      i += 1
    end
    return @all_pets
  end
end
