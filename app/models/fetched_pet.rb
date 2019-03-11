require 'net/http'
require 'pry'
class FetchedPet
  
  def self.data_grab(data_set)
    i = 0
    @all_pets = []
    while i < data_set["lastOffset"]["$t"].to_i
      details = data_set["pets"]["pet"][i]
      summary = Hash.new
      summary["id"] = details["id"]["$t"]
      summary["name"] = details["name"]["$t"]
      summary["age"] = details["age"]["$t"]
      summary["description"] = details["description"]["$t"]
      summary["photo"] = details.dig("media","photos","photo",2,"$t")
      @all_pets << summary
      i += 1
    end
    return @all_pets
  end
end
