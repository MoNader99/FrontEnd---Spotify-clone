import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {SignUp} from "../../Components/SignUp/SignUp"


describe("SignUp Page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<SignUp/> ); 
  });


  describe("Component rendering", () => {    
   

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.Sign-Up");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Display SignUp page', () => {
      expect(wrapper.find("h2").text()).toContain("Sign up with your email address")    
    })

  })


});