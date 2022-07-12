import React, { Component } from 'react'
import {Col, Card, CardTitle, CardText} from 'reactstrap'

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

      </div>
    )
  }
}

export default ApartmentShow