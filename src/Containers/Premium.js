import React, { Component } from 'react'
import Header from '../Components/Header'
import './Premium.css'
//import Card from './PrCard'
import CardList from '../Components/PrCardList'
import GoPremium from '../Components/GoPremium'
import Footer from '../Components/Footer'

/**
 * Class component for showing premium features of the user 
 * 
 * 
 */


class Premium extends Component{
    render(){
        return (
            <div>
                <Header></Header>
                <h1 id='h1-pr' className="black tc mv5 ">Why go Premium?</h1>
                <CardList></CardList>
                <GoPremium></GoPremium>
                <Footer></Footer>
            </div>
        )
    }
}

export default Premium