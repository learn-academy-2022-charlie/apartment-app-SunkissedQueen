# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
apartments_arr = [
  {
    street: "Another Fake Street", 
    city: "Another Fake City", 
    state: "FS", 
    manager: "Fanny Fake", 
    email: "aint.email.com", 
    price: "$1050/week", 
    bedrooms: 2, 
    bathrooms: 1, 
    pets: "only air", 
    image: "/Users/charleanbaxter/Desktop/projects/apartment-app-SunkissedQueen/app/javascript/assets/fancy1.jpeg"
  },{
    street: "Aint Street", 
    city: "Another Fake City", 
    state: "FS", 
    manager: "Phoney Phil", 
    email: "no.email.com", 
    price: "$3050/week", 
    bedrooms: 3, 
    bathrooms: 2, 
    pets: "under 10 lbs", 
    image: "/Users/charleanbaxter/Desktop/projects/apartment-app-SunkissedQueen/app/javascript/assets/hay1.jpeg"
  },{
    street: "Another Fake Street", 
    city: "Another Fake City", 
    state: "FS", 
    manager: "Fanny Fake", 
    email: "aint.email.com", 
    price: "$1050/week", 
    bedrooms: 2, 
    bathrooms: 1, 
    pets: "only air", 
    image: "/Users/charleanbaxter/Desktop/projects/apartment-app-SunkissedQueen/app/javascript/assets/island1.jpeg"
  },{
    street: "Another Fake Street", 
    city: "Another Fake City", 
    state: "FS", 
    manager: "Fanny Fake", 
    email: "aint.email.com", 
    price: "$1050/week", 
    bedrooms: 2, 
    bathrooms: 1, 
    pets: "only air", 
    image: "/Users/charleanbaxter/Desktop/projects/apartment-app-SunkissedQueen/app/javascript/assets/quaint1.jpeg"
  },{
    street: "Another Fake Street", 
    city: "Another Fake City", 
    state: "FS", 
    manager: "Fanny Fake", 
    email: "aint.email.com", 
    price: "$1050/week", 
    bedrooms: 2, 
    bathrooms: 1, 
    pets: "only air", 
    image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Arba_domo_en_la_parko_de_la_Ch%C3%A2teau_de_Langeais_02.jpg"
  }
]

user1 = User.where(email: 'fake@example.com').first_or_create(password: '11111111', password_confirmation: '11111111')

apartments_arr.each do |apt|
  user1.apartments.create apt
  puts "creating TreeHouse #{apt}"
end
