import React, { Component } from 'react'
import WebPlayer from '../Components/WebPlayer'
import {SideBar} from '../Components/SideBar'
import WebNav from '../Components/WebNav'
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {WebFrame} from './WebFrame'
import {Provider} from 'react-redux';
import Store from '../Redux/Store';

Enzyme.configure({adapter:new Adapter()});

describe("web frame test",()=>{
    sessionStorage.setItem('token','testtoken')
    const wrapper =shallow(<WebFrame></WebFrame>)

    it("the side bar should exits",()=>{
        const side = wrapper.find(SideBar)
        expect(side.exists()).toBe(true)
    })
    it("the nav bar should exits",()=>{
        const nav = wrapper.find(WebNav)
        expect(nav.exists()).toBe(true)
    })
    it("the web player should exits",()=>{
        const player = wrapper.find(WebPlayer)
        expect(player.exists()).toBe(true)
    })

})