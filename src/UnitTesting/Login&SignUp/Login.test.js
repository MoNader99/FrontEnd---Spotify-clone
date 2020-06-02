import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {Login} from "../../Components/Login/Login"


describe("Login Page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Login/> ); 
  });


  describe("Component rendering", () => {    
   

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.login-page");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Display Login page', () => {
      expect(wrapper.find("p").text()).toContain(" To continue, log in to Spotify.")    
    })

    
    

  })


});