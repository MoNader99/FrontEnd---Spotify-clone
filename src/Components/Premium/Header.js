import React from 'react';
import './Header.css'
// import NavBar from './NavBar'

/**
 * Header of the premium page 
 * 
 */

const Header = ()=>{
    return(
        <div className="header-premium">
            <div className='header ma0 pl5 '>
                {/* <NavBar></NavBar> */}
                <h1 id='h-tit' className='white mt6 mb0 f-subheadline lh-title '>Get Premium free for 1 month</h1>
                <h2 id='h-subtit' className=' white mt0'>Just EGP 49.99/month after. Cancel anytime.</h2>
                <div className=''><button  id='pr-btn' className='white grow' >GET PREMIUM</button></div>
                <p className=' f7 white'><span className='underline'>Terms and conditions apply.</span> 1 month free not available for users who have already tried Premium</p>
            </div>
        </div>
    )
}
export default Header