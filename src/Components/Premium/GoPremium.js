import React from 'react'
import './GoPremium.css'

/**
 * card component summarize the premium features
 * contains a button for the user if he wants to go premium
 */

const GoPremium=()=>{
    return (
                <div className='container-fluid'>
                    <div className='row justify-content-center dib shadow-2 br3 pa3 ma2  bw2 mt5 mb5'>
                            <h2>Spotify Premium</h2>
                            <p><span className='f1'>EGP 49.99</span>/month</p>
                            <p className='f7 gray'>1 month free</p>
                            <hr></hr>
                            <ul className='ml3'>
                                <li>Play any song</li>
                                <li>Listen offline</li>
                                <li>No ad interruptions.</li>
                                <li>Unlimited skips</li>
                                <li>High audio quality</li>
                            </ul>
                            <hr></hr>
                            <div><button id='pr2-btn' className='white grow'>Get Premium</button></div>
                    </div>
                </div>
    )
}

export default GoPremium