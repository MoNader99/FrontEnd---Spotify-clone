import React from "react";
import {shallow, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({adapter: new Adapter()});
import ShareSong from "../../Components/Share/ShareSong"
import {mount} from 'enzyme';
import configureMockStore from "redux-mock-store";
import reducer from "../../Store/reducer";
import { Provider } from "react-redux";


const mockStore = configureMockStore();
const store = mockStore({});
const mockCallBack = jest.fn(); 

// const ShareSong = shallow((<Provider store={store}><ShareSong /></Provider>));
describe("Share Song test", ()=>{
  let wrapper;
  beforeEach(() => {
    const wrapper = mount( // enzyme
    <Provider store={store}><ShareSong /></Provider>)
  })

  
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
