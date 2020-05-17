import React from "react"
import SearchBox from "../Components/SearchBox"
import HeaderBackground from "../Components/HeaderBackground"
import NavBar from '../Components/NavBar'
import Sliders from '../Components/Sliders'
import BlackNavBar from '../Components/BlackNavBar'
import Paragraph from "../Components/Paragraph"
import CreatePlaylist from '../Components/CreatePlaylist'

const Help = () =>{

    return(

        <div>
            
            <BlackNavBar></BlackNavBar>
            <HeaderBackground></HeaderBackground>
            <Sliders></Sliders>
            <Paragraph></Paragraph>
        </div>
    );
}
 

export default Help