import React from 'react';
import ArtistOverview from '../../Components/Artist Overview/ArtistOverview'
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
   wrapper = shallow(<ArtistOverview/> ); 
  });

  it("Should have  one div", ()=>{
    const div= wrapper.find("div");
    expect(div).toHaveLength(7);
  })
  it("Should have header", ()=>{
    const header= wrapper.find("h3");
    expect(header).toHaveLength(1);
  })
  it("Should have button", ()=>{
    const button= wrapper.find("button");
    expect(button).toHaveLength(1);
  })
  


});