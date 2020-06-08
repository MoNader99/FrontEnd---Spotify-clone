import React from 'react';
import ChangeCoverPhoto from '../../Components/Edit Artist/ChangeCoverPhoto'
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
   wrapper = shallow(<ChangeCoverPhoto/> ); 
  });

  it("Should have   div", ()=>{
    const div= wrapper.find("div");
    expect(div).toHaveLength(3);
  })
  it("Should have 1 input", ()=>{
    const input= wrapper.find("input");
    expect(input).toHaveLength(1);
  })
  it("Should have label", ()=>{
    const label= wrapper.find("label");
    expect(label).toHaveLength(1);
  })
  


});