import React, { Component } from 'react'
import Footer from './components/Footer'
import Home from './pages/Home'
import ApartmentIndex from './pages/ApartmentIndex'
import ApartmentShow from './pages/ApartmentShow'
import ApartmentNew from './pages/ApartmentNew'
import ApartmentEdit from './pages/ApartmentEdit'
import NotFound from './pages/NotFound'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.readTreeHouse()
  }
  
  readTreeHouse = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => response.json())
    .then(aptArr => this.setState({apartments: aptArr}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }

  createTreeHouse = (treeHouse) => {
    fetch("http://localhost:3000/apartments", {
      body: JSON.stringify(treeHouse),
      headers: {
          "Content-Type": "application/json"
      },
      method: "POST"
      })
    .then(response => response.json())
    .then(payload => this.readTreeHouse())
    .catch(errors => console.log("Treehouse create errors:", errors))
  }

  updateTreeHouse = (updatedTree, id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      body: JSON.stringify(updatedTree),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readTreeHouse())
    .catch(errors => console.log("TreeHouse update errors:", errors))
  }

  deleteTreeHouse = (id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readTreeHouse())
    .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    console.log(this.state.apartments)
    return (
      <>
        <Router>          
          <Switch>
            
            <Route exact path="/" component={Home} />

            <Route 
              path="/apartmentindex" 
              render={(props) => {
                let apartments = this.state.apartments
                return <ApartmentIndex apartments={apartments} current_user={this.props.current_user}/>
              }} 
            />

            <Route 
              path="/apartmentshow/:id" 
              render={(props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === +id)
                return <ApartmentShow apartment={apartment} deleteTreeHouse={this.deleteTreeHouse}/>
              }} 
            />
            
            <Route
              path="/apartmentnew" 
              render={(props) => <ApartmentNew createTreeHouse={this.createTreeHouse} current_user={this.props.current_user}/>}
            />

            <Route 
              path="/apartmentedit/:id" 
              render={(props) => {
                let id = props.match.params.id
                let apartment = this.state.apartments.find(apartment => apartment.id === +id)
                return <ApartmentEdit updateTreeHouse={this.updateTreeHouse} apartment={apartment} id={id} />
              }} 
            />

            <Route component={NotFound}/>

          </Switch>
          <br/>
          <Footer />
        </Router>  
      </>  
    )
  }
}

export default App