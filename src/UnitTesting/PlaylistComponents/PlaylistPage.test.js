import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {PlaylistPage} from "../../Components/PlaylistsComponent/PlaylistPage"

describe("Playlist page test", ()=>{
  let wrapper;
  beforeEach(() => {
   wrapper = shallow(<PlaylistPage/> ); 
  });


  describe("Component rendering", () => {    
   
    it('Display playlist page', () => {
      expect(wrapper.state('playplaylist')).toEqual('Play');
    })

    it("Should render the wrpper div correctly", ()=>{
      const wrapperdiv= wrapper.find("div.playlist-page");
      expect(wrapperdiv).toHaveLength(1);
    })

  })

});