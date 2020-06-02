import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {RecentActivities} from "../../Components/Notifications/RecentActivities"


describe("Recent Activites Page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<RecentActivities/> ); 
  });


  describe("Component rendering", () => {    
   

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.recent-activities-page");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Display Welcome page', () => {
      expect(wrapper.find("h2").text()).toContain(" Notifications")    
    })
  })


});