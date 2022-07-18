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

## Error Messages
```
Error: Cannot find module '../assets/treelogo.png'
    at webpackMissingModule (Footer.test.js:22:1)
    ReferenceError: App is not defined
    at eval (eval at ./node_modules/react_ujs/react_ujs/src/getConstructor/fromGlobal.js.module.exports
```
- Got that error after improper path to image
- ../../ to show the levels that needed to go to retrieve images in the javascript folder

## Loading images√
- in javascript/assets
  - import treelogo from '../../../assets/treelogo.png'
  - <img src={treelogo} alt="Logo" height="35" width="auto"/>
- app/assets/images and referenced in views
  - <%= image_tag "treelogo.png", height: 50 %>
- application.scss
```css
body {
  background: image-url('lighter.png') repeat center fixed;
  background-size: cover;
} 
```

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

## 2) branch: rails-crud √
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

## 3) branch: devise √
```ruby
# conditional rendering in home view
<% if user_signed_in? %>
  <li class="nav-item">
    <%= link_to 'Sign Out', destroy_user_session_path, method: :delete, class:"nav-link" %>
  </li> 
  <li class="nav-item">
    <%= link_to 'Edit Profile', edit_user_registration_path, class:"nav-link" %>
  </li>
  <li class="nav-item">
  <%= link_to 'Tree Houses', apartments_path, class:"nav-link" %>
  </li> 
<% else %>
  <li class="nav-item">
    <%= link_to 'Sign Up', new_user_registration_path, class:"nav-link" %>
  </li>
  <li class="nav-item">
    <%= link_to 'Sign In', new_user_session_path, class:"nav-link" %>
  </li>
<% end %>
```
- $ rails g devise:views

- $ rails generate migration add_username_to_user
```ruby
# db/migrate
class AddUsernameToUser < ActiveRecord::Migration[6.0]
  def change
    # add_column :table, :column_name, :data_type
    add_column :users, :username, :string
  end
end

# $ rails db:migrate

# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    # pass params for the sign up form
    devise_parameter_sanitizer.permit(:sign_up, keys: [:username, :email, :password])
    # pass params for the sign in form
    devise_parameter_sanitizer.permit(:account_update, keys: [:username, :email, :password])
  end
end

# config/initializers/devise.rb
# This line is commented out and set to false.
# config.scoped_views = false

# Update the value to be true:
config.scoped_views = true
```

- Go to app/views/devise/registrations/new.html.erb
- Go to app/views/devise/registrations/edit.html.erb
- Go to app/views/devise/sessions/new.html.erb: 
  - Add form-group on all the divs with field
  - Add class:"form-control", placeholder:"message"
  - For the check_box, add form-check and class:"form-control"
  - button, add class:'btn btn-secondary'

## 4) branch: mock-apt (read functionality)
- Add a file to javascript called mockApartments.js 
```javascript
let apartments = [
  {
    id: 1,
    street: "Another Fake Street", 
    city: "Another Fake City", 
    state: "FS", 
    manager: "Fanny Fake", 
    email: "aint.email.com", 
    price: "$1050/week", 
    bedrooms: 2, 
    bathrooms: 1, 
    pets: "only air", 
    image: "https://upload.wikimedia.org/wikipedia/commons/d/de/View_from_Pagatpat_tree_house_-_panoramio_%281%29.jpg", 
    user_id: 1
  }
]

export default apartments

// import and updates on App.js
import mockApartments from './mockApartments.js'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      apartments: mockApartments
    }
  }

<Route path="/apartmentindex" render={(props) => <ApartmentIndex apartments={this.state.apartments} />} />

// Modify ApartmentIndex
import React, { Component } from 'react'
import { Card, CardImg, CardGroup, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'

class ApartmentIndex extends Component {
  render() {
    return (
      <>
<h3> For currency there is vacancy!</h3>
<br />
  {this.props.apartments.map((apartment, index) => {
    return(
      <CardGroup key={index}>
      <Card body>
          <CardImg
            alt="Card image cap"
            src={apartment.image}
            top width="100%"
          />
          <CardBody>
            <CardTitle tag="h5">
            <NavLink to={`/apartmentshow/${apartment.id}`}>
              <h4>{apartment.street}</h4>
              <h4>{apartment.city}, {apartment.state}</h4>
            </NavLink>
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to additional content.
            </CardText>
            <Button>
              Button
            </Button>
          </CardBody>
        </Card>
      </CardGroup>
    )
  })}   
      </>
    )
  }
}

export default ApartmentIndex

// Modify App.js and Show
<Route path="/apartmentshow/:id" render={(props) => {
  let id = props.match.params.id
  let apartment = this.state.apartments.find(apartment => apartment.id === +id)
  return <ApartmentShow apartment={apartment} />
}} />

<Col sm="6">
  <Card body>
    <CardTitle>Hi, my name is {this.props.apartment.name}!</CardTitle>
    <img src={this.props.apartment.image} alt="adorable apartment" />
    <CardText>I am {this.props.apartment.age} years old. I enjoy  {this.props.apartment.enjoys}.</CardText>
  </Card>
</Col>
```

## Routes
```ruby
# If you want a route to index or show pages to be rendered on a view, place path as a string 
<%= link_to 'Tree Houses', "/apartmentindex", class:"nav-button" %>
# if wanted auto links
<%= render "devise/shared/links" %>
```
```javascript
// example of a test
describe("When Home renders", () => {
  it("displays a heading", () => {
    const home = shallow(<Home />)
    const homeHeading = home.find("h3")
    console.log("HOME", homeHeading.debug());
    expect(homeHeading.text()).toEqual("Home from React")
  })
})
```

## Toggle button
Had to add bs to the toggle and target attributes

## Footer idea
```
- <hr/>
  <a href="https://web.facebook.com/" > by SyntacticalMagician </a>
```

## References
- 

## branch: new-tree
```javascript
//  Use my notes from ApartmentApp
// The work flow --- Create a test that will verify that the CatNew page has a form and a heading.
// Trello---As a developer, I have test coverage on my new page.

// Bring in test dependencies from jest enzyme
// $ yarn add jest
// $ yarn add -D enzyme react-test-renderer enzyme-adapter-react-16
// write test
// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import CatNew from './CatNew.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When CatNew Renders", () => {

  let catNewRender
  beforeEach(() => {
    catNewRender = shallow(<CatNew />)
  })
  it("displays a heading", ()=>{
    const catNewHeading = catNewRender.find("h3")
    expect(catNewHeading.length).toEqual(1)
    expect(catNewHeading.text()).toEqual("Tell us about that fur!")
  })
  it("displays a form", ()=>{
    const catNewForm = catNewRender.find("Form")
    expect(catNewForm.length).toEqual(1)
  })     
})
// $ yarn test
// Good failure if all tests appear.
// The work flow --- Add a form and a heading on the CatNew page.
// Trello---As a user, I can fill out a form to add a new cat.

// copy code for form and button from reactstrap.github.io
<Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
    <Button>
    Submit
  </Button>
</Form>
// import all the tags from Reactstrap
  import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
// Update the form to reflect the input fields for cat's name, age, enjoys, image
// Add the h3 heading as shown on the test
// Remove id attribute from the Input component
    return (
      <>
      <h3>Tell us about that fur!</h3>
      <Form>
        <FormGroup>
          <Label for="name">
            Name
          </Label>
          <Input
            name="name"
            placeholder="What is your name?"
            type="text"
          />
        </FormGroup>
        <Button>
          Add that Feline
        </Button>
      </Form>
      </>
    )
// Verify the tests passed
// Ctrl + C to stop the tests from auto-running
// A form with the 4 input fields should appear on the CatNew page in the browser
// The work flow --- Transform CatNew page into a logic component.
// Trello---As a developer, I can store the cat object in state

// Constructor method with a state object under the class component. We will also include a nested object that will store the input data for our cats
  constructor(props){
    super(props)
    this.state = {
      newCat: {
        name: "",
        age: "",
        enjoys: "",
        image: ""
      }
    }
  }
// Collect info with a custom method and event listener. The method will initially just print out the event object produced by the event listener
handleChange = (e) => { 
  console.log(e)
}
// Each input will receive an onChange event listener.

  <Input
    name="age"
    placeholder="What is your age?"
    type="text"
    onChange={this.handleChange}
  />
// update the handleChange() to reflect the e.target.name and e.target.value
// update handleChange() to change the appropriate keys in state with destructuring the newCat object from state, dynamically sharing the key:value pairs,
handleChange = (e) => {
  let { newCat } = this.state
  newCat[e.target.name] = e.target.value
  this.setState({newCat: newCat})
}
// Add a value attribute to the input field to ensure what the user types is showing visually on the form
  <Input
    name="age"
    placeholder="What is your age?"
    type="text"
    onChange={this.handleChange}
    value={this.state.newCat.age}
  />
// The work flow --- Pass info to App.js
// Trello---As a developer, I can pass the cat object to App.js on submit and see the cat object logged in the console.

// Create a function on App.js that takes in an argument and prints that out.
  createCat = (cat) => {
    console.log("Cat has been created", cat)
  }
// Make function available to child component
  <Route
    path="/catnew"
    render={(props) => <CatNew createCat={this.createCat} />}
  />
// Access the createCat() in CatNew.js by creating a function that calls upon createCat() and passes the newCat object
handleSubmit = () => {
  this.props.createCat(this.state.newCat)
}
// Update the submit button to trigger the handleSubmit()
  <Button onClick={this.handleSubmit} name='submit'>
    Add a Cat
  </Button> 
// The work flow --- Redirect CatNew page to the CatIndex page after submitting cat info

// react-router import
import { Redirect } from 'react-router-dom'
//  Set the condition to be met that will allow a redirect. Initial state ---> submitted: false
//  Use handleSubmit() to update submitted to true when a submission is made
//  JavaScript code at the bottom of the JSX that will redirect when submitted is true
{this.state.submitted && <Redirect to="/catindex" />}
```
## branch delete
- Make a delete method on App.js
- pass as a prop to Show.js
- onclick attribute to button
- use same syntax as edit syntax

## branch backend
- ensure config/routes has resource
- add seeds db/seeds
```ruby

apartments = [
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

apartments.each do |apt|
  Apartment.create apt
  puts "creating cat #{apt}"
end
```

- $ rails db:seed in the terminal.
- $ rails c and look for the cats with Apartment.all

- $ rails db:drop
- $ rails db:create
- $ rails db:migrate
- $ rails db:seed

```ruby
# stub the endpoints in tha apartment controller
  def index
  end

  def create
  end

  def update
  end

  def destroy
  end

  # /spec/requests/cats_request_spec.rb
  require 'rails_helper'

RSpec.describe "Cats", type: :request do
  describe "GET /index" do
    it "gets a list of cats" do
      Cat.create(
        name: 'Felix',
        age: 2,
        enjoys: 'Walks in the park',
        image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
      )

      # Make a request
      get '/cats'

      cat = JSON.parse(response.body)
      expect(response).to have_http_status(200)
      expect(cat.length).to eq 1
    end
  end
end

# update controller
def index
  cats = Cat.all
  render json: cats
end

# create
describe "POST /create" do
  it "creates a cat" do
    # The params we are going to send with the request
    cat_params = {
      cat: {
        name: 'Buster',
        age: 4,
        enjoys: 'Meow Mix, and plenty of sunshine.',
        image: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80'
      }
    }

    # Send the request to the server
    post '/cats', params: cat_params

    # Assure that we get a success back
    expect(response).to have_http_status(200)

    # Look up the cat we expect to be created in the db
    cat = Cat.first

    # Assure that the created cat has the correct attributes
    expect(cat.name).to eq 'Buster'
  end
end

  def create
    # Create a new cat
    cat = Cat.create(cat_params)
    render json: cat
  end

  # Handle strong parameters, so we are secure
  private
  def cat_params
    params.require(:cat).permit(:name, :age, :enjoys, :image)
  end
```