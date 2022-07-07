require 'rails_helper'

RSpec.describe Apartment, type: :model do
  let(:user) { 
    User.create email: 'fake@email.com', password: '123456', password_confirmation: '123456' 
  }

  it 'should have a valid street' do
    apt = Apartment.create city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:street]).to include "can't be blank"
  end

  it 'should have a valid city' do
    apt = Apartment.create street: "Another Fake Street", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:city]).to include "can't be blank"
  end

  it 'should have a valid state' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:state]).to include "can't be blank"
  end

  it 'should have a valid manager' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", state: "FS", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:manager]).to include "can't be blank"
  end

  it 'should have a valid email' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", state: "FS", manager: "Fanny Fake", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:email]).to include "can't be blank"
  end

  it 'should have a valid price' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:price]).to include "can't be blank"
  end

  it 'should have a valid bedrooms' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:bedrooms]).to include "can't be blank"
  end

  it 'should have a valid bathrooms' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:bathrooms]).to include "can't be blank"
  end

  it 'should have a valid pets' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:pets]).to include "can't be blank"
  end

  it 'should have a valid image' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", user_id: user.id
    expect(apt.errors[:image]).to include "can't be blank"
  end

  it 'should have a valid user' do
    apt = Apartment.create street: "Another Fake Street", city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg"
    expect(apt.errors[:user]).to include "must exist"
  end
end