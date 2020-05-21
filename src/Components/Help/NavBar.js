import React from 'react'
import './NavBar.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
/*const NavBar=()=>{
    return (
        <nav className='fixed-top navbar navbar-expand-lg '>
            <ul className='ml5 navbar-nav'>
                <li className='nav-item'><a href='' className='f2 lh-copy white nav-link navbar-brand'>Spotify</a></li>
            </ul>
            <ul className='navbar-nav mr4 ml-auto '>
                <li className='nav-item ph3'><a href='' className='white nav-link'>Premium</a></li>
                <li className='nav-item ph3'><a href='' className='white nav-link'>Help</a></li>
                <li className='nav-item ph3'><a href='' className='white nav-link'>Download</a></li>
                <li className='nav-item ph3'><a href='' className='white nav-link'>Sign-up</a></li>
                <li className='nav-item ph3'><a href='' className='white nav-link'>Login</a></li>
            </ul>
        </nav>
    )
}
$(function () {
    $(window).on('scroll', function () {
        if ( $(window).scrollTop() > 10 ) {
            $('.react-navi').addClass('active');
        } else {
            $('.react-navi').removeClass('active');
        }
    });
});*/

const NavBar=()=>{
    return (
        <Navbar collapseOnSelect expand="lg" fixed='top' className='ml0 pt3 react-navi navbar-dark'>
            <Link to='/HomePage'><Navbar.Brand className='' href=""><span className='logo pl6 ml5 navbar-logo'></span></Navbar.Brand></Link>
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

export default NavBar