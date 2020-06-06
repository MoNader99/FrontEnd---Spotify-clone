import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import ForgetPassword from "../../Components/Login/ForgetPassword"


describe("Forget Password Page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<ForgetPassword/> ); 
  });


  describe("Component rendering", () => {    
   

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.forget-password");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Display Login page', () => {
      expect(wrapper.find("h1").text()).toContain(" Password Reset")    
    })

  })


});