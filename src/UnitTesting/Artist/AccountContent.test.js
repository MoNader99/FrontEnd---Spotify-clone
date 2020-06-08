import React from 'react';
import AccountContent from '../../Components/Edit Artist/AccountContent'
import Adapter from "enzyme-adapter-react-16";
import {shallow,configure,mount,sinon,spy} from 'enzyme'


configure({adapter: new Adapter()});
//CALL THE DESCRIBE FUNCTION 
//IT TAKES TWO PARAMETERS 1ST: A TEXT DESCRIPTION
//                        2ND: AN ARROW FUNCTION 
describe("MediaObject test", ()=>{


  //INSIDE THE ARROW FUNCTION YOU FIRST HAVE TO GRAB THE COMPONENT
  // YOU DO AS FOLLOWING NOW YOU HAVE THE COMPONENT STORED IN THE wrapper VARIABLE
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<AccountContent/> ); 
  });

  it("Should have  one div", ()=>{
    const div= wrapper.find("div");
    expect(div).toHaveLength(1);
  })
  it("Should have 1 switch", ()=>{
    const Switch= wrapper.find("Switch");
    expect(Switch).toHaveLength(1);
  })
  it("Should have Routes", ()=>{
    const routes= wrapper.find("Route");
    expect(routes).toHaveLength(4);
  })
  


});