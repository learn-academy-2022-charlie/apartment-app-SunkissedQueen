require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do

    let(:user) do
      User.create email: 'fake@email.com', password: '111111', password_confirmation: '111111'
    end
    
    it "gets a list of apartments" do
      Apartment.create(
        street: "Another Fake Street", 
        city: "Another Fake City", 
        state: "FS", 
        manager: "Fanny Fake", 
        email: "aint.email.com", 
        price: "$1050/week", 
        bedrooms: 2, 
        bathrooms: 1, 
        pets: "only air", 
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Arba_domo_en_la_parko_de_la_Ch%C3%A2teau_de_Langeais_02.jpg",
        user_id: user.id
      )

      # Make a request
      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(apartments.length).to eq 1
      expect(response).to have_http_status(200)

      apartment = apartments.first
      expect(apartment['street']).to eq 'Another Fake Street'
      expect(apartment['city']).to eq 'Another Fake City'
      expect(apartment['state']).to eq 'FS'
      expect(apartment['manager']).to eq 'Fanny Fake'
      expect(apartment['email']).to eq 'aint.email.com'
      expect(apartment['price']).to eq '$1050/week'
      expect(apartment['bedrooms']).to eq 2
      expect(apartment['bathrooms']).to eq 1
      expect(apartment['pets']).to eq 'only air'
      expect(apartment['image']).to eq 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Arba_domo_en_la_parko_de_la_Ch%C3%A2teau_de_Langeais_02.jpg'
    end
  end
end
