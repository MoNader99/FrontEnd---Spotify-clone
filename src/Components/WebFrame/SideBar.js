import React, { Component } from 'react'
import './SideBar.css'
import './NavBar.css'
import Webframe from '../Containers/WebFrame'
import Library from '../library.PNG'
import { Link } from 'react-router-dom'
import CreatePlaylist from './CreatePlaylist'
import {connect} from 'react-redux'
import {GetPage} from '../Redux/Pages/PagesAction'


const MapStateToProps = (state) =>{
    return {
        CurrPage: state.page.pageName,
        
    }
}

const MapDispatchToProps = (dispatch) =>{
    return{
        UpdateCurrPage: (page)=> dispatch(GetPage(page))
    }
}

/**
 * the side bar of the web frame
 */

export class SideBar extends Component{
    constructor(props){
    super(props)
    this.state = {
        modalOpen: false
     }
    }
     handleModalOpen = () => {
        this.setState((prevState) => {
           return{
              modalOpen: !prevState.modalOpen
           }
        })
     }
    render(){
    return (
        <div className='pl4 sidenav'>
            <img className=' mt2' src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' width='131' height='40'></img>
            <div className='mt4 '>
                <div className=''>
                    <img className='dib mb1' width='24' height='24' src='https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX5559065.jpg'></img>
                    <Link to='../WebFrame/Home'><div onClick={()=>this.props.UpdateCurrPage('home')} className='thehome dib  ml3 fw-900'>Home</div></Link>
                </div>
                <div className='mt3'>
                    <img className='dib mb1' width='24' height='20' src='https://www.pngkit.com/png/full/22-228161_free-icons-png-search-button-png-white.png'></img>
                    <Link to='../WebFrame/Search1'><div onClick={()=>this.props.UpdateCurrPage('search')} className='dib  ml3 fw-900'>Search</div></Link>
                </div>
                <div className='mt3'>
                    <img className='dib mb1' width='24' height='24' src={Library}></img>
                    <Link  to='../WebFrame/Library2'><div onClick={()=>this.props.UpdateCurrPage('library')} className='dib  ml3 fw-900'>Library</div></Link>
                </div>
                
            </div>
            <div className=' mt4'>
                <p className='f6 lh-copy'>PLAYLISTS</p>
                <div className='mt4'>
                    <div>
                        <img width='24' height='24' className='dib' src='https://previews.123rf.com/images/alionaursu/alionaursu1909/alionaursu190900024/129840824-plus-icon-vector-design-isolated-on-white-background.jpg'></img>
                        <div  className='dib ml3 fw-900 pointer'><span onClick={this.handleModalOpen}>Create Playlist</span></div>
                    </div>
                    <div className='mt3'>
                        <img width='24' height='24' className='dib' src='https://4.bp.blogspot.com/-XzJ5OnL023w/XHbn9ondWXI/AAAAAAAAIDM/3LZfHpJcGjQ7Qtv5dSKmLpFQnLqtIi4ZwCK4BGAYYCw/s1600/heart%2Blove%2Bicon.png'></img>
                        <Link to='../WebFrame/LikedSongs'><div onClick={()=>this.props.UpdateCurrPage('likedsongs')} className='dib ml3 fw-900'>Liked Songs</div></Link>
                    </div>
                </div>
                <hr id='hor-row'></hr>
            </div>
            <CreatePlaylist
           modalOpen={this.state.modalOpen}
           handleModalOpen={this.handleModalOpen}
        />
        </div>
    )};
}

connect(MapStateToProps,MapDispatchToProps)(SideBar)