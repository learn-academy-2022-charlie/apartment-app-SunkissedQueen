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