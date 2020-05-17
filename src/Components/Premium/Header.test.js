import React from 'react'
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Header from './Header'
import NavBar from './NavBar'

Enzyme.configure({adapter:new Adapter()});

describe("Premium Header test",()=>{
    it('should the texts',()=>{
        const wrapper = shallow(<Header></Header>)
        const h1= wrapper.find('div h1');
        expect(h1.text()).toBe('Get Premium free for 1 month');

        const h2= wrapper.find('div h2');
        expect(h2.text()).toBe('Just EGP 49.99/month after. Cancel anytime.');

        const btn= wrapper.find('div div button');
        expect(btn.text()).toBe('GET PREMIUM');

        const p= wrapper.find('div p');
        expect(p.text()).toBe('Terms and conditions apply. 1 month free not available for users who have already tried Premium');

        const span= wrapper.find('div p span');
        expect(span.text()).toBe('Terms and conditions apply.');
    });
    it('the navbar should be found',()=>{
        const wrapper = shallow(<Header></Header>)
        const div = wrapper.find('div div')
        const nav = div.find(NavBar)
        expect(nav.exists()).toBe(true)
    });
    
})