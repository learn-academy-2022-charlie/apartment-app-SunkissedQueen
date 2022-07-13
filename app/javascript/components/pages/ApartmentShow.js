import React, { Component } from 'react'
import {Button, Card, CardTitle, CardText} from 'reactstrap'
import {NavLink} from 'react-router-dom'

class ApartmentShow extends Component {
  render() {
    const {street, city, state, price, manager, image, bedrooms, bathrooms, pets, email} = this.props.apartment
    return (
      <div className="container">

          <Card body className="tree" >
            <CardTitle>This treehouse experience is located at {street}, {city}, {state}!</CardTitle>
            <img src={image} alt="adorable apartment" />
            <CardText>{price} will give you and your companions access to a wonderful get-away. This treehouse has {bedrooms} bedroom(s) and {bathrooms} bathroom(s).</CardText>
            <CardText>Pets allowed: {pets}</CardText>
            <CardText>Property Manager: {manager}, {email}</CardText>
          </Card>
          <br/>
        <NavLink to={`/apartmentedit/${this.props.apartment.id}`}>
          <Button>Edit TreeHouse</Button>
        </NavLink>
      </div>
    )
  }
}

export default ApartmentShow