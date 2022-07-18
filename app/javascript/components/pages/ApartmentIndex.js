import React, { Component } from 'react';
import { Collapse, Card, CardHeader, CardBody, CardImg, CardTitle } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import treeLogo from '../../../assets/images/treelogo.png'

class ApartmentIndex extends Component {
  constructor(props) {
      super(props)
      this.toggle = this.toggle.bind(this)
      this.state = { 
        collapse: 0
      }
    }

    toggle(e) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }

    render() {
      const {collapse} = this.state;
      return (
        <div className="container">
            <h3 className="page-header">For currency there is vacancy!</h3>
            {this.props.apartments.map((apartment, index) => {
              return (
                <Card style={{ marginBottom: '1rem', width: '50%', height: 'auto', margin: 'auto' }} key={index}>
                  <CardHeader onClick={this.toggle} data-event={index}>Available TreeHouse {collapse === index?'➖':'➕'}</CardHeader>
                  <Collapse isOpen={collapse === index}>
                  <CardImg
                    alt="Card image cap"
                    src={treeLogo}
                    top width="100%"
                  />  
                  <CardBody>
                    <CardTitle tag="h5">
                      <NavLink to={`/apartmentshow/${apartment.id}`}>
                        <h4>{apartment.state} Rental</h4>
                        <h4>{apartment.price}</h4>
                      </NavLink>
                    </CardTitle>
                  </CardBody>
                  </Collapse>
                </Card>
              )
            })}     
          </div>
      )
    }
}

export default ApartmentIndex