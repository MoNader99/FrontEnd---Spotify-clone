import React from 'react'
import Card from './PrCard'
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter:new Adapter()});

describe("Premium feature card test",()=>{
    it('should shows the right texts',()=>{
        const wrapper = shallow(<Card Feature="Free Download" Result="Unlimited Songs"></Card>)

        const h3= wrapper.find('div h3');
        expect(h3.text()).toBe('Free Download');

        const p= wrapper.find('div p');
        expect(p.text()).toBe('Unlimited Songs');

    })
})