import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import UserProfile from "../../Components/UserProfile/Userprofile"


describe("User Profile Page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<UserProfile/> ); 
  });


  describe("Component rendering", () => {    
   

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.user");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Display Welcome page', () => {
      expect(wrapper.find("h3").text()).toContain("Public Playlists")    
    })
})

})
