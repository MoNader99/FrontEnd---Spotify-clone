import React, { Component } from 'react'
import Header from '../Components/Premium/Header'
import './Premium.css'
//import Card from './PrCard'
import CardList from '../Components//Premium/PrCardList'
import GoPremium from '../Components//Premium/GoPremium'
import Footer from '../Components//Premium/Footer'
import { MainNavbar } from '../Components/WelcomeRelated/MainNavbar'
import Bottom from '../Components/WelcomeRelated/Bottom'

/**
 * Class component for showing premium features of the user 
 * 
 * 
 */


class Premium extends Component{
    render(){
        return (
               
            <div className="premium-page">
            <MainNavbar color="black"/>
                <Header></Header>
                <h1 id='h1-pr' className="black tc mv5 ">Why go Premium?</h1>
                <CardList></CardList>
                <GoPremium></GoPremium>
                <Footer></Footer>
                <Bottom/>
            </div>
           
        )
    }
}

export default Premium