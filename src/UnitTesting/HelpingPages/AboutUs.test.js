import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import AboutUs from "../../Components/HelpingPages/AboutUs"


describe("About Us Page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<AboutUs/> ); 
  });


  describe("Component rendering", () => {    
   

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.about-us-page");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Display About Us page', () => {
      expect(wrapper.find("h1").text()).toContain("About Us")    
    })

    it("Should find number of sub headers in the page", ()=>{
        const wrapperdiv= wrapper.find("h2");
        expect(wrapperdiv).toHaveLength(3);
      })

    
    

  })


});