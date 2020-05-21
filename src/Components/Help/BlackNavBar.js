import React from 'react'
import '../Components/BlackNavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const BlackNavBar = () =>{
    return(
        <Navbar collapseOnSelect expand="lg" bg="black" className='ml0 pt3 react-navi navbar-dark mb0'>
            <button><Navbar.Brand className='' href=""><span className='logo pl6 ml5 navbar-logo'></span></Navbar.Brand></button>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className='white mr5 ml-auto fw-500'>
                    <Link to='/Premium'><li className='ph3'><a href='' className='white anchor '>Premium</a></li></Link>
                    <Link to='/Help'><li className='ph3'><a href='' className='white '>Help</a></li></Link>
                    <Link to='/Download'><li className='ph3'><a href='' className='white'>Download</a></li></Link>
                    <Link to='/SignUp'><li className='ph3'><a href='' className='white '>Sign-up</a></li></Link>
                    <Link to='/Login'><li className='ph3'><a href='' className='white '>Login</a></li></Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default BlackNavBar;