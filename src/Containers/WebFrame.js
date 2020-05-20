import React, { Component } from 'react'
import Player from '../Components/WebFrame/WebPlayerpage'
import {SideBar} from '../../src/Components/WebFrame/SideBar'
import ArtistsLibrary from '../../src/Components/Webplayer/YourLibrary/ArtistsLibrary'
import AlbumsLibrary from '../../src/Components/Webplayer/YourLibrary/AlbumsLibrary'
import Home from '../../src/Components/Webplayer/Home/Home'
import YourLibrary from '../../src/Components/Webplayer/YourLibrary/YourLibrary'
import PlaylistPage from '../../src/Components/PlaylistsComponent/PlaylistPage'
import AlbumPage from '../../src/Components/AlbumComponent/AlbumPage';
import LikedSongs from '../../src/Components/LikedSongs/LikedSongs';
import Search from '../../src/Components/Search/Search';


import WebNav from '../Components/WebFrame/WebNav'
import './WebFrame.css'
import {BrowserRouter as Router,
    Switch, 
    Route, 
   } from "react-router-dom";

import {connect} from 'react-redux'


export class WebFrame extends Component{    
    render(){
        return (

                  <div className ="web-player-class">
                  <div className="row mx-0 no-gutters" >
                  <Player></Player>
                    
                  <SideBar ></SideBar>
          
                    <div className="content-web-player">
          
                            <Switch>
                                <Route  exact path="/webplayer/search/" component={Search}/>
                                <Route  exact path="/webplayer/playlist/" component={PlaylistPage}/>
                                <Route  exact path="/webplayer/album/" component={AlbumPage}/>
                                <Route  exact path="/webplayer/likedsongs/" component={LikedSongs}/>
                                <Route path="/webplayer/home"  component={Home} />
                                <Route path="/webplayer/yourlibrary"  component={YourLibrary} />
                                <Route exact path="/webplayer/yourlibrary/artists"  component={ArtistsLibrary} />
                                <Route exact path="/webplayer/yourlibrary/albums"  component={AlbumsLibrary} />  
                            </Switch>
                              </div>
          
          
                  </div>
          
                </div>
        )
    }
}
    


// connect(MapStateToProps,MapDispatchToProps)(WebFrame)