import React, { Component } from 'react'
import WebPlayer from '../Components/WebFrame/WebPlayer'
import {SideBar} from '../Components/WebFrame/SideBar'
import WebNav from '../Components/WebFrame/WebNav'
// import PlaylistInsidePage from './PlaylistInsidePage'
// import Albums from '../Containers/Albums'
// import AlbumInsidePage from '../Containers/AlbumInsidePage'
import './WebFrame.css'
// import SearchPage from './SearchPage'
// import WebPlayerHome from './WebPlayerHome'
// import WebHomeInside from './WebHomeInside'
// import FirstWebHome from './FirstWebHome'
// import CreatePlaylist from '../Components/CreatePlaylist'
// import PlayList from '../Containers/Playlist'
// import LikedSongs from '../Components/LikedSongs'
import {BrowserRouter as Router , Switch , Route , Link,Redirect} from 'react-router-dom'
// import Pages from './SearchPages'
// import Playlist from '../Containers/Playlist'
import {connect} from 'react-redux'
// import {GetPage} from '../Redux/Pages/PagesAction'
// import Album from '../Containers/Albums'

/**
 * 
 * @param {object} state - holds the state of the Application
 */

// const MapStateToProps = (state) =>{
//     return {
//         LikedSong: state.like.song,
//         LikedAlbum: state.like.album,
//         LikedPlaylist: state.like.playlist
//     }
// }
/**
 * 
 * @param {function} dispatch -to dispatch any action by redux
 */
// const MapDispatchToProps = (dispatch) =>{
//     return{
//         UpdateCurrPage: (page)=> dispatch(GetPage(page))
//     }
// }
/**
 * class holds the sidebar , navbar, webplayer & the content of page in it 
 */

export class WebFrame extends Component{
    /**
     * checks if the user is logged-in or skipped the login page 
     * 
     */
    constructor(props){
        super(props);
        // this.UpdateCurrentPage= this.UpdateCurrentPage.bind(this)
        let loggedIn=true
        let token=sessionStorage.getItem("token")
        console.log("the token is  ",token)
        if (token == null){
            loggedIn=false
        }

        this.state ={
            ShowPopUp: false,
            loggedIn
        }
    }
    /**
     * function called to get the page that the user is opening now
     * 
     * it will get the name of the page as a string parameter
     */
    // UpdateCurrentPage(){
    //     this.props.UpdateCurrPage('library')
    // }
    
    /**
     * either redirect the user to the login page if he is not authorized.
     * 
     * or show the web frame content
     */
    
    render(){
    
            // if (this.state.loggedIn === false){
            //     return(
            //         <Redirect to='../Login'></Redirect>
            //     )
            // }
        
        return (
            

            <div>
                <div className=''>
                    <SideBar ></SideBar>
                    <WebPlayer></WebPlayer>
                    <Router>
                            <div className='web-frame '>    {/*The Content of the page is placed here,,routing also will be here*/ }
                            {/* <WebNav></WebNav> */}
                            <Switch>
                                {/* <Route  path='/WebFrame/Home'>
                                    <WebPlayerHome></WebPlayerHome>
                                </Route>
                                <Route  path='/WebFrame/WebHomeInside_:id' component={WebHomeInside}>
                                </Route>
                                <Route  path='/WebFrame/LikedSongs'>
                                    <LikedSongs></LikedSongs>
                                </Route>
                                <Route path='/WebFrame/Page_:id' component ={Pages}>
                                </Route>
                                <Route  path='/WebFrame/Search:id'>
                                    <SearchPage></SearchPage>
                                </Route> */}
                                {/* <Route  path='/WebFrame/Library:id' >
                                    {window.location.href=='http://localhost:3000/WebFrame/Library2'? this.UpdateCurrentPage():<div></div>}
                                    <Playlist></Playlist>
                                </Route> */}
                                {/* <Route  path='/WebFrame/PlaylistInsidePage_:id' component={PlaylistInsidePage}>
                                </Route>
                                <Route  path='/WebFrame/AlbumInsidePage_:id' component={AlbumInsidePage} >
                                </Route> */}
                                {/* <Route  path='/WebFrame/FirstWebHome'>
                                <FirstWebHome></FirstWebHome>
                                </Route>
                                <Route  path='/WebFrame/Album'>
                                <Album></Album>
                                </Route>
                                <Route  path='/WebFrame/'>
                                <WebPlayerHome></WebPlayerHome>
                                </Route> */}
                                
                            </Switch>

                            </div>
                    </Router>
                            
                </div>
            </div>
        )

    }
}
    


// connect(MapStateToProps,MapDispatchToProps)(WebFrame)