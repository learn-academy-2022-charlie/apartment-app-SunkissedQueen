// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow, mount, render } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import ApartmentShow from './ApartmentShow'

import mockApartments from '../../mockApartments.js'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentShow Renders", () => {

  let apartmentShowRender
  beforeEach(() => {
    apartmentShowRender = shallow(<ApartmentShow apartment={mockApartments[0]} />)
  })
  it("displays a profile for the apartment being passed to it", ()=>{
    const cardRender = apartmentShowRender.find("Card")
    expect(cardRender.length).toEqual(1)
  })
  it("displays edit and delete buttons", ()=>{
    const buttonRender = apartmentShowRender.find("Button")
    expect(buttonRender.length).toEqual(2)
  })
  it("should render component", () => {
    expect(apartmentShowRender.exists("Button")).toBe(true);
  })  
})