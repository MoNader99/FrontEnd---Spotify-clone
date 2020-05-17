import React from 'react'
import Header from '../Components/Header'
//import Card from './PrCard'
import CardList from '../Components/PrCardList'
import GoPremium from '../Components/GoPremium'
import Footer from '../Components/Footer'
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Premium from './Premium'
Enzyme.configure({adapter:new Adapter()});

describe("premium page test",()=>{
    const wrapper = shallow(<Premium></Premium>)
    it("the header should exist",()=>{
        const header = wrapper.find(Header)
        expect(header.exists()).toBe(true)
    });
    it("text should appear",()=>{
        const h1 = wrapper.find('div h1')
        expect(h1.text()).toBe("Why go Premium?")
    })
    it("the cardlists should exist",()=>{
        const list = wrapper.find(CardList)
        expect(list.exists()).toBe(true)
    })
    it("the go-premium container should exist",()=>{
        const prem = wrapper.find(GoPremium)
        expect(prem.exists()).toBe(true)
    })
    it("the footer should exist",()=>{
        const footer = wrapper.find(Footer)
        expect(footer.exists()).toBe(true)
    })



})