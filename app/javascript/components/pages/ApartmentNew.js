import React, { Component } from 'react'
import { Card, CardBody, Form, Row, Col, FormGroup, Label, Input, Button, CardGroup } from 'reactstrap'
import { Redirect } from 'react-router-dom'

class ApartmentNew extends Component {

  constructor(props){
    super(props)
    this.state = {
      newTreeHouse: {
        street: "",
        city: "",
        state: "",
        manager: "",
        email: "",
        price: "",
        bedroom: "",
        bathroom: "",
        pet: "",
        image: "",
      },
      submitted: false
    }
  }

  handleChange = (e) => { 
    console.log(e)
    let { newTreeHouse } = this.state
    newTreeHouse[e.target.name] = e.target.value
    this.setState({newTreeHouse: newTreeHouse})
  }

  handleSubmit = () => {
    this.props.createTreeHouse(this.state.newTreeHouse)
    this.setState({submitted: true})
  }

  render() {
    console.log(this.state.newTreeHouse)
    return (
      <Card style={{backgroundColor: '#e3deda'}}>
        <CardBody>
        <h2>Share a new treehouse experience.</h2>
        <Form>
          
          <FormGroup>
            <Label for="exampleAddress">
              Address
            </Label>
            <Input
              name="address"
              placeholder="Street Address"
              type="text"
              onChange={this.handleChange}
              value={this.state.newTreeHouse.address}
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
                  placeholder="City"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.newTreeHouse.city}
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
                  placeholder="State"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.newTreeHouse.state}                  
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
                  placeholder="Property Manager"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.newTreeHouse.manager}
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
                  placeholder="Email"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.newTreeHouse.email}
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
                  name="pet"
                  placeholder="Are pets acceptable?"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.newTreeHouse.pet}
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
                  placeholder="Share a link for the photo"
                  type="url"
                  onChange={this.handleChange}
                  value={this.state.newTreeHouse.image}
                />
              </FormGroup>
            </Col>
          </Row>

          <Button onClick={this.handleSubmit} name='submit'>
            Submit the treehouse
          </Button>
          {this.state.submitted && <Redirect to="/apartmentindex" />}
        </Form>
        </CardBody>
      </Card>
    )
  }
}

export default ApartmentNew