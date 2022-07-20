import React, { Component } from 'react'
import { Card, CardBody, Form, Row, Col, FormGroup, Label, Input, Button, CardGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentEdit extends Component {
  constructor(props){
    super(props)
    this.state = {
      editTreeHouse: {
        street: this.props.apartment ? this.props.apartment.street : "",
        city: this.props.apartment ? this.props.apartment.city : "",
        state: this.props.apartment ? this.props.apartment.state : "",
        manager: this.props.apartment ? this.props.apartment.manager : "",
        email: this.props.apartment ? this.props.apartment.email : "",
        price: this.props.apartment ? this.props.apartment.price : "",
        bedrooms: this.props.apartment ? this.props.apartment.bedrooms : "",
        bathrooms: this.props.apartment ? this.props.apartment.bathrooms : "",
        pets: this.props.apartment ? this.props.apartment.pets : "",
        image: this.props.apartment ? this.props.apartment.image : "",
      },
      submitted: false
    }
  }

  handleChange = (e) => { 
    let { editTreeHouse } = this.state
    editTreeHouse[e.target.name] = e.target.value
    this.setState({editTreeHouse: editTreeHouse})
  }

  handleSubmit = () => {
    this.props.updateTreeHouse(this.state.editTreeHouse, this.props.apartment.id)
    this.setState({submitted: true})
  }

  render() {
    console.log(this.state.editTreeHouse)
    return (
      <Card style={{backgroundColor: '#e3deda'}}>
        <CardBody>
          <h2>Update the treehouse</h2>
          <Form>
            
            <FormGroup>
              <Label for="exampleAddress">
                Address
              </Label>
              <Input
                name="street"
                type="text"
                onChange={this.handleChange}
                value={this.state.editTreeHouse.street}            
              />
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleCity">
                    City
                  </Label>
                  <Input
                    name="city"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.city}                
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleState">
                    State
                  </Label>
                  <Input
                    name="state"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.state}                
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleManager">
                    Manager
                  </Label>
                  <Input
                    name="manager"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.manager}                
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleEmail">
                    Email
                  </Label>
                  <Input
                    name="email"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.email}                
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={4}>
                <FormGroup>
                  <Label for="examplePrice">
                    Price
                  </Label>
                  <Input
                    name="price"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.price}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleBedroom">
                    Bedroom(s)
                  </Label>
                  <Input
                    name="bedrooms"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.bedrooms}
                  />
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="exampleBathroom">
                    Bathroom(s)
                  </Label>
                  <Input
                    name="bathrooms"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.bathrooms}
                  />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplePet">
                    Pet
                  </Label>
                  <Input
                    name="pets"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.pets}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleImage">
                    Image
                  </Label>
                  <Input
                    name="image"
                    type="url"
                    onChange={this.handleChange}
                    value={this.state.editTreeHouse.image}
                  />
                </FormGroup>
              </Col>
            </Row>
            <br/>
            <Button onClick={this.handleSubmit} name='submit'>
              Update the treehouse
            </Button>
            {this.state.submitted && <Redirect to={`/apartmentshow/${this.props.apartment.id}`} />}
          </Form>
        </CardBody>
      </Card>
    )
  }
}

export default ApartmentEdit