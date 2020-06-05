import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {ShareSong} from "../../Components/Share/ShareSong"

describe("Share Song test", ()=>{
  let wrapper;
  const props={
    songURL:{songURL:""}
  }
  beforeEach(() => {
  
   wrapper = shallow(<ShareSong {...props}/>); 
  });
  
  describe("Component rendering", () => {    

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.share-song");
      expect(wrapperdiv).toHaveLength(1);
    })
   
    it('Share Song', () => {
      expect(wrapper.find("h2").text()).toContain("Share Song URL With: ")    
    })
  })

});