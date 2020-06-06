import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {Search} from "../../Components/Search/Search"

describe("Search page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<Search/> ); 
  });

    
    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.Search");
      expect(wrapperdiv).toHaveLength(1);
    })

    it('Display Search Page', () => {
        expect(wrapper.find("h2").text()).toContain("Browse All")    
      })

      it ('Test functions', () => {
            wrapper.setState({ display:false});
          expect(wrapper.find("h2")).toHaveLength(4)
      })
  })

 

