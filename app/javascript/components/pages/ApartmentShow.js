import React, { Component } from 'react'
import {Button, Card, CardTitle, CardText} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class ApartmentShow extends Component {
  render() {
    const {apartment} = this.props
    return (
      <div className="container">
        {apartment &&
          <Card body className="tree" >
            <CardTitle>This treehouse experience is located at {apartment.street}, {apartment.city}, {apartment.state}!</CardTitle>
            <img src={apartment.image} alt="adorable apartment" />
            <CardText>{apartment.price} will give you and your companions access to a wonderful get-away. This treehouse has {apartment.bedrooms} bedroom(s) and {apartment.bathrooms} bathroom(s).</CardText>
            <CardText>Pets allowed: {apartment.pets}</CardText>
            <CardText>Property Manager: {apartment.manager}, {apartment.email}</CardText>
            <br/>
            <NavLink to={`/apartmentedit/${this.props.apartment.id}`}>
              <Button>Edit TreeHouse</Button>
            </NavLink>
            <br/>
            <NavLink to={"/apartmentindex"}>
              <Button onClick={() => this.props.deleteTreeHouse(apartment.id)}>
                Delete TreeHouse
              </Button>
            </NavLink>
          </Card>
        }
      </div>
    )
  }
}

export default ApartmentShow