import React, { Component } from 'react'
import {Col, Card, CardTitle, CardText} from 'reactstrap'

class ApartmentShow extends Component {
  render() {
    return (
      <>
        <Col sm="6">
          <Card body>
            <CardTitle>Hi, my name is {this.props.apartment.street}!</CardTitle>
            <img src={this.props.apartment.image2} alt="adorable apartment" />
            <CardText>Price: {this.props.apartment.price}</CardText>
          </Card>
        </Col>
      </>
    )
  }
}

export default ApartmentShow