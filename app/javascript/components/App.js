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
// import mockApartments from '../mockApartments.js'

class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      // apartments: mockApartments
      apartments: []
    }
  }

  componentDidMount(){
    this.readTreeHouse()
  }
  
  readTreeHouse = () => {
    fetch("http://localhost:3000/apartments")
    .then(response => response.json())
    // set the state with the data from the backend into the empty array
    .then(aptArr => this.setState({apartments: aptArr}))
    .catch(errors => console.log("Apartment read errors:", errors))
  }
  createTreeHouse = (treeHouse) => {
    console.log("Treehouse has been created", treeHouse)
  }

  createCat = (treeHouse) => {
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

  updateTreeHouse = (editTree, id) => {
    console.log("editTree:", editTree)
    console.log("id:", id)
  }

  deleteTreeHouse = (treeId) => {
    console.log("Treehouse has been deleted", treeId)
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
              render={(props) => <ApartmentIndex apartments={this.state.apartments} />} 
            />

            <Route path="/apartmentshow/:id" render={(props) => {
              let id = props.match.params.id
              let apartment = this.state.apartments.find(apartment => apartment.id === +id)
              return <ApartmentShow apartment={apartment} deleteTreeHouse={this.deleteTreeHouse}/>
            }} />
            
            <Route
              path="/apartmentnew"
              render={(props) => <ApartmentNew createTreeHouse={this.createTreeHouse} />}
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