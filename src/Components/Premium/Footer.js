import React from 'react'
import './Footer.css'

/**
 * the footer of the premium page
 */
const Footer = ()=>{
    return (
        <footer>
            <div className='l-ft f7 pt4  mt5'>
                <a className='ml5 first' href=''>Legal</a>
                <a className='ml5' href=''>Cookies</a>
                <a className='ml5' href=''>About Ads</a>
            </div>
            <div className='r-ft gray'>
                <li><a>Egypt(English)</a></li>
            </div>
        </footer>
    )
}

export default Footer