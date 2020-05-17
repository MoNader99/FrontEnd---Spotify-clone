import React from 'react'
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import WebPlayer from './WebPlayer'
import Player from './Audio'

Enzyme.configure({adapter:new Adapter()});

describe("webplayer test",()=>{
    const wrapper = shallow(<WebPlayer></WebPlayer>)
    it("the player should exist",()=>{
        const audio = wrapper.find(Player)
        expect(audio.exists()).toBe(true);
    })
    it("the song name should appear",()=>{
        const song = wrapper.find('.desc')
        expect(song.text()).toBe("Kan Lak ma'aya cairokee");
    })
    it("the band name should appear",()=>{
        const band = wrapper.find('#band')
        expect(band.text()).toBe(" cairokee");
    })
})