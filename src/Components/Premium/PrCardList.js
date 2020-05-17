import React from 'react'
import Card from './PrCard'

/**
 *  this list contains the 4 cards that are explaining why to go premium 
 */

const CardList =()=>{
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <Card Feature='Download music.' Result='Listen anywhere.' Image='https://campaigns.scdn.co/images/benefit-1.png'></Card>
                <Card Feature='No ad interruptions.' Result='Enjoy nonstop music.' Image='https://campaigns.scdn.co/images/benefit-2.png'></Card>
                <Card Feature='Play any song.' Result='Even on mobile.' Image='https://campaigns.scdn.co/images/benefit-3.png'></Card>
                <Card Feature='Unlimited skips.' Result='Just hit next.' Image='https://campaigns.scdn.co/images/benefit-4.png'></Card>
            </div>
        </div>
    )
}

export default CardList