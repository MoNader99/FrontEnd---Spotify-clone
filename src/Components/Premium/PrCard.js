import React from 'react'
import './PrCard.css'

/**
 * @param {string} Feature - the premium feature in this card
 * @param {string} Result - contains the impact of the feature on the user
 * @param {String} Image - jpg image descripes the feature
 */

const Card=({Image,Feature,Result})=>{
    return(
        <div className="premium-card">
        <div id='card' className='tc dib  pa3 ma2  '>
            <img id='pr-img' src={`${Image}`}></img>
            <div className='pr-txt'>
            <h3 className='b mt5'>{Feature}</h3>
            <p className='tc'>{Result}</p>
            </div>
        </div>
        </div>
    )
}

export default Card