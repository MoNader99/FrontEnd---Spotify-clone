import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import {EditPlaylist} from "../../Components/PlaylistsComponent/EditPlaylist"

describe("Edit Playlist page test", ()=>{
    let wrapper;
    beforeEach(() => {
     wrapper = shallow(<EditPlaylist/> ); 
    });

    
    describe("Component rendering", () => {    

        it("Should render the wrpper div correctly", ()=>{
          const wrapperdiv= wrapper.find("div.edit-playlist");
          expect(wrapperdiv).toHaveLength(1);
        })
       
        it('Edit playlist', () => {
          expect(wrapper.find("label").text()).toContain("Playlist Name")    
        })
      })
    
    
    });