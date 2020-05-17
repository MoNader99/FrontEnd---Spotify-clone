import React from 'react'
import './WebNav.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import {useSelector,useDispatch} from 'react-redux'
import {GetPage} from '../Redux/Pages/PagesAction'


const WebNav=()=>{
    const dispatch = useDispatch()
    const page = useSelector(state=>state.page.PageName)

    return (
        <Navbar collapseOnSelect    fixed='top' className='web-nav '>
        {
            (page=='library')?
            <Nav className='ml6 fw-900 f4 lh-copyx'>
                <div onClick={()=>dispatch(GetPage('library'))} className=' '>
                    <Link to='../WebFrame/Library2'><span className='white playlist'>Playlists</span></Link>
                    <Link to='../WebFrame/Album'><span className='ml4 white album'>Albums</span></Link>

                </div>
            </Nav>
            :<div></div>
        }
            <Nav className='white mr3 ml-auto fw-500'>
                <button id='nav-btn' className='white grow ba b--near-white mr3'>UPGRADE</button>
                <Dropdown>
                    <Dropdown.Toggle bg='black' id="dropdown-basic"  className='nav-drop'><span className='white'>User Name</span></Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Navbar>
    )
}
export default WebNav