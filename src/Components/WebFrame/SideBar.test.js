import React from 'react'
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import {Provider} from 'react-redux';
import Store from '../Redux/Store';
import {SideBar} from './SideBar'

Enzyme.configure({adapter:new Adapter()});

describe("side bar test",()=>{
    const sidebar= shallow(<SideBar></SideBar>)
    it("home button should exists",()=>{
        const btn = sidebar.find('div.thehome')
        expect(btn.exists()).toBe(true)
    })
    it("create playlist btn should appear",()=>{
        const cr_btn=sidebar.find('.pointer')
        expect(cr_btn.text()).toBe('Create Playlist')
    })
})