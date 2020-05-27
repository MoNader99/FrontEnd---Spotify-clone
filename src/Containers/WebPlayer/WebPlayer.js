import React,{Component} from 'react';
import './WebPlayer.css';
import Player from '../../Components/WebFrame/Player'

import ArtistsLibrary from '../../Components/Webplayer/YourLibrary/ArtistsLibrary'
import AlbumsLibrary from '../../Components/Webplayer/YourLibrary/AlbumsLibrary'
import Home from '../../Components/Webplayer/Home/Home'
import YourLibrary from '../../Components/Webplayer/YourLibrary/YourLibrary'
import PlaylistPage from '../../Components/PlaylistsComponent/PlaylistPage'
import AlbumPage from '../../Components/AlbumComponent/AlbumPage';
import LikedSongs from '../../Components/LikedSongs/LikedSongs';
import Search from '../../Components/Search/Search';
import CreatePlaylist from '../../Components/PlaylistsComponent/CreatePlaylist';
import {BrowserRouter as Router,
    Switch, 
    Route, 
   } from "react-router-dom";
import { HomePageSidebar } from '../../Components/HomePage/HomePageSidebar';




class WebPlayerPage extends Component {

  render(){

    return (
      <div className ="web-player-class">
        <div id="blur">
        <div className="row mx-0 no-gutters" >

          <div className="side-bar-web-player">
            <HomePageSidebar/>
          </div>

          <div className="content-web-player">

          <Switch>
                <Route  exact path="/webplayer/search/" component={Search}/>
                <Route  exact path="/webplayer/playlist/" component={PlaylistPage}/>
                <Route  exact path="/webplayer/album/" component={AlbumPage}/>
                <Route  exact path="/webplayer/likedsongs/" component={LikedSongs}/>
                <Route path="/webplayer/" component={Home} />
                <Route path="/webplayer/yourlibrary"  component={YourLibrary} />
                <Route exact path="/webplayer/yourlibrary-artists"  component={ArtistsLibrary} />
                <Route exact path="/webplayer/yourlibrary-albums"  component={AlbumsLibrary} />    
          </Switch>

          </div>


        </div>

        <footer className="music-bar-footer">
          <Player></Player>
        </footer>
        </div>
        <CreatePlaylist/> 
      </div>
      
    );


  }
  
}

export default WebPlayerPage;

