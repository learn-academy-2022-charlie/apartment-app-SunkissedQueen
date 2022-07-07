# Apartment App
This app has been created for you to mimic the feeling of entering into a developer role where there is established code that you have not created. This Apartment application has a few features that have been created for you and some key items that have been left totally untouched. Part of your job as a developer is to be able to pick up code that has already been created, understand what is going on with it, and continue the development of that code. 

## 👨‍💻 How We Got Here
```
$ rails new apartment-app -d postgresql -T
$ cd apartment-app
$ rails db:create
$ bundle add rspec-rails
$ rails generate rspec:install
$ bundle add webpacker
$ bundle add react-rails
$ rails webpacker:install
$ rails webpacker:install:react
$ yarn add @babel/preset-react
$ yarn add @rails/activestorage
$ yarn add @rails/ujs
$ rails generate react:install
$ rails generate react:component App
$ bundle add devise
$ rails generate devise:install
$ rails generate devise User
$ rails db:migrate
$ rails generate controller Home
```

## 🛠 Configurations

### Devise Config
**config/environments/development.rb**
```ruby
This line added:
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }
```

**config/initializers/devise.rb**
```ruby
# This line replaced:
config.sign_out_via = :delete
# With this line:
config.sign_out_via = :get
```

File added in app/views/home called index.html.erb
**app/views/home/index.html.erb**
```javascript
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

### React in Rails Config

**app/views/layouts/application.html.erb**
```ruby
# This line replaced:
<%= javascript_importmap_tags %>
# With this line:
<%= javascript_pack_tag 'application', 'data-turbolinks-track': 'reload' %>
```

**config/routes.rb**
```ruby
# These lines added:
get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
root 'home#index'
```

### React Routing Config
```bash
yarn add react-router-dom@5.3.0
```

**app/javascript/components/App.js**
```javascript
import {
  BrowserRouter as  Router,
  Route,
  Switch
} from 'react-router-dom'
```

### Reactstrap Config
```bash
bundle add bootstrap
mv app/assets/stylesheets/application.css app/assets/stylesheets/application.scss
yarn add reactstrap
```

**app/assets/stylesheets/application.scss**
```css
@import 'bootstrap';
```

## ⚡️ Getting Started √
Once you're able to clone the repository, within the root of the project directory, run:

```bash
bundle 
yarn
rails db:setup
```

## 🏁 Start the App √
```bash
rails s
```

See what is available already in the application.
- What can a USER do? Currently a user can sign in/sign up/ log out/ see all pages
- What views (pages, components) are available?
header, footer, index, edit, show, new, home, notfound

## 🏡 Apartment Resource √
The Devise User model is going to have an association with the Apartment model. In this situation, the User will have many apartments and the Apartments will belong to a User.

```bash
rails generate resource Apartment street:string city:string state:string manager:string email:string price:string bedrooms:integer bathrooms:integer pets:string image:text user_id:integer
rails db:migrate
```

### User and Apartment Associations
The Apartments will belong to a User and a User will have many apartments.

**app/models/apartment.rb**
```ruby
class Apartment < ApplicationRecord
  belongs_to :user
end
```

**app/models/user.rb**
```ruby
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
end
```

## 🚗 Testing
To run the existing testing suite, run:

```bash
yarn jest
rspec spec/
```

### Apartment Data Specs
Tests you will need are:  

REQUEST: 
- to ensure a user can see all apartments
- to ensure a user can see all apartments that belong to them
- to ensure a user can make a new apartment
- to ensure a user can update an apartment
- to ensure a user can remove an apartment
- to ensure a user cannot make a new apartment with nil values
- to ensure an error will be thrown if an unregistered user tried to make an apartment
- to ensure an error will be thrown if a user tries to edit an apartment that doesn't belong to them
- to ensure an error will be thrown if a user tries to delete an apartment that doesn't belong to them

MODELS: 
- to ensure apartment is valid
- to ensure a user cannot make a new apartment with nil values
- to ensure a user cannot make a new apartment that already exists in the database
- to ensure a user cannot update an apartment with nil values
- to ensure a user cannot update another user's apartment

**The following code is a mock and does not work but is here to get your started.**
```ruby
require 'rails_helper'

RSpec.describe "Apartments", type: :request do
  describe "GET /index" do
    it 'returns a list of apartments' do
    
      user = User.where(email: 'test@example.com').first_or_create(password: '12345678', password_confirmation: '12345678')

      user.apartments.create(
        street: string,
        city: string,
        state: string,
        manager: string,
        email: string, 
        price: string, 
        bedrooms: integer, 
        bathrooms: integer, 
        pets: string,
        image: text
      )

      get '/apartments'

      apartments = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(apartments.length).to eq(1)
    end
  end
end
```

## My Approach/Initial Notes
- This exercise allows you to perform the crucial point of development: problem solving
- Checkout the README
- Since this database is shared through http we have to run some type $ rails db:create, I chose $ rails db:prepare because it drops db, create, migrate, and seeds 
- All steps before Getting Started have been completed
- Begin at Getting Started
- Look at Trello
- To quickly refresh webpacker in an additional tab run: $ ./bin/webpack-dev-server
- Option + V will create a checkmark to areas that I completed

## URL for mockApts photos
- hay
- https://live.staticflickr.com/1323/660567985_0588581de2_b.jpg
- https://pixnio.com/free-images/2017/09/12/2017-09-12-06-53-58-550x367.jpg

- fancy
- https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg
- https://live.staticflickr.com/7528/15665157578_d954f795a4_b.jpg
- https://live.staticflickr.com/7399/27301630834_ed0fa93b17_c.jpg

- island
- https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVsejCYbjmB5GDQX2GXhUKcpfaCDzStfHpuA&usqp=CAU
- https://a0.muscache.com/pictures/bc94fc3c-f812-4723-88c1-b8e6995113e1.jpg

- quaint
- https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjrf03_DeE1f17uDlDkVI6JNyZM_Ehv5y3wg&usqp=CAU
- https://upload.wikimedia.org/wikipedia/commons/0/08/Inside_the_Tree_House_-_geograph.org.uk_-_571538.jpg

## Devise Views
app/views/devise
sessions
 - login form-group on all the divs with fields, each class get a form-control and placeholder. Take off label = sign
registrations
passwords


## 1) branch: environment √
> Modified the application.html.erb because it is a template of the app that every view/page will render

> It grabs every single page and yields it html

> partials used on this file will point to where the information lives

```ruby
#  app/views/layouts/application.html.erb
<title>TreeHouse</title>
  <body>
    HEADER HERE
    <%= yield %>
    FOOTER HERE
  </body>

#  create app/views/home/about.html.erb
<h1>About Us</h1>

#  app/controllers/home_controller.rb
  def index
  end
  
  def about
  end

#  config/routes.rb
    get 'home/about'

# - Use bootstrap for styling   https://getbootstrap.com/
# a blend of the template from bootstrap site and info already on application.html.erb
# https://getbootstrap.com/docs/5.2/getting-started/introduction/
# Tutorial codemy.com https://www.youtube.com/watch?v=kxNneOy8ewU&list=PLCC34OHNcOtrk3BDsfZwf4GattdLoKCOF&index=3

# bootstrap class that automatically gives spacing/alignment
    <div class="container">yield</div>

# Get header on all pages
#  Create a partial view...app/views/home/_header.html.erb
HEADER GOES HERE....
# - on application.html.erb...rails know to look for the file
    <%= render 'home/header' %>

# Go to components on bootstrap for navbar, add to header.html.erb 
# If the partial view was not created, then this code would have to live on the application.html.erb instead of having render 'home/header'
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">TreeHouse</a>

# Modify links and remove items that will not be used
  <%= link_to 'TreeHouse App', root_path, class:"navbar-brand" %>

  <li class="nav-item">
    <%= link_to 'About Us', home_about_path, class:"nav-link" %>
  </li>
```

## 2) branch: rails-crud
- reference syllabus https://github.com/learn-academy-2022-charlie/Syllabus/blob/main/rails/generate-resource.md
- FORGOT to make associations as stated in stubbed README, ideally do this after generating resource
- since ran resource only need to create controller in rails and views will be handled by react pages/components using fetch requests
```ruby
# app/controllers/application_controller.rb
  skip_before_action :verify_authenticity_token

# index method
  def index
    apartments = Apartment.all
    render json: apartments
  end

# rails c
# make sure logged in so you don't have to create a user
user1 = User.find 1
user1.apartments.create street: "Fake Street", city: "Fake City", state: "FS", manager: "Manny Fake", email: "fake.email.com", price: "$1000/day", bedrooms: 0, bathrooms: 0, pets: "imaginary", image: "https://live.staticflickr.com/1323/660567985_0588581de2_b.jpg"

# Check browser
http://localhost:3000/apartments

# show method, create a show.html.erb on apartment view
  def show
    apartment = Apartment.find([params[:id]])
    render json: apartment
  end

# add a another entry
user1.apartments.create street: "Another Fake Street", city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg"

# Check browser
http://localhost:3000/apartments/2

# create method
  def create
    apartment = Apartment.create(apartment_params)
    if apartment.valid?
      render json: apartment
    else
      render json: apartment.errors
    end
  end

  private
  def apartment_params
    params.require(:apartment).permit(:street, :city, :state, :manager, :email, :price, :bedrooms, :bathrooms, :pets, :image)
  end

# Postman error states {"user":["must exist"]}
POST http://localhost:3000/apartments
{
    "street": "That Phony Street", 
    "city": "Phony City", 
    "state": "PS", 
    "manager": "Phony Phil", 
    "email": "aint.email.com", 
    "price": "$150/hr", 
    "bedrooms": 1, 
    "bathrooms": 1, 
    "pets": "only air", 
    "image": "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg"
}
# Will modify devise user method, Need to review Wildlife Tracker project for research on devise user, all other endpoints work on Postman

# update method
  def update
    apartment = Apartment.find(params[:id])
    apartment.update(apartment_params)
    render json: apartment
  end

# destroy method
  def destroy
    apartment = Apartment.find(params[:id])
    apartment.destroy
    render json: apartment
  end

# testing in spec/models/apartment_spec.rb
  let(:user) { 
    User.create email: 'fake@email.com', password: '123456', password_confirmation: '123456' 
  }

    it 'should have a valid street' do
    apt = Apartment.create city: "Another Fake City", state: "FS", manager: "Fanny Fake", email: "aint.email.com", price: "$1050/week", bedrooms: 2, bathrooms: 1, pets: "only air", image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", user_id: user.id
    expect(apt.errors[:street]).to include "can't be blank"
  end

# add notice and alert to application view
      <p class="notice"> <%= notice %> </p>
      <p class="alert"> <%= alert %> </p>
```