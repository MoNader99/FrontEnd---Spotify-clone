import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import React from 'react'
import Footer from './Footer'

Enzyme.configure({adapter:new Adapter()});

describe("test of premium footer",()=>{
    it("should contain the texts",()=>{
        const wrapper = shallow(<Footer></Footer>)
        const a = wrapper.find('footer div a.first')
        expect(a.text()).toBe('Legal')

        const li = wrapper.find('footer div li')
        expect(li.text()).toBe('Egypt(English)')
    });
})