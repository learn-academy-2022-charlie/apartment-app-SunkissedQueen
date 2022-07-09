// Imports React into our test file.
import React from 'react'

// Imports Enzyme testing and deconstructs Shallow into our test file.
import Enzyme, { shallow } from 'enzyme'

// Imports Adapter utilizing the latest react version into our test file so we can run a testing render on any component we may need.
import Adapter from 'enzyme-adapter-react-16'

// Imports in the component we are going to be testing.
import Home from './Home'

//Allows us to utilize the adapter we import in earlier, allowing us to call and render a component.
Enzyme.configure({ adapter: new Adapter() })

describe("When Home renders", ()=>{
  let homeRender
  beforeEach(() => {
    homeRender = shallow(<Home />)
  })
  it("displays a heading", () => {
    const greeting = homeRender.find("h2")
    console.log("greeting", greeting.debug()); 
    expect(greeting.length).toEqual(1)
    expect(greeting.text()).toEqual("Don't just swing on it, Sleep in it")
  })
  it("has a carousel of images", () => {
    const carousel = homeRender.find("carousel-inner")
    console.log("carousel", carousel.debug());
    expect(carousel.length).toEqual(6)
  })
})