import React from 'react'
import Card from './GoPremium'
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter:new Adapter()});

describe("Premium Container test",()=>{
    it('should shows the right texts',()=>{
        const wrapper = shallow(<Card></Card>)

        const h2= wrapper.find('div div h2');
        expect(h2.text()).toBe('Spotify Premium');

        const p= wrapper.find('div div p.f7');
        expect(p.text()).toBe('1 month free');


        const div= wrapper.find('div div div');
        expect(div.text()).toBe('Get Premium');

    })
})