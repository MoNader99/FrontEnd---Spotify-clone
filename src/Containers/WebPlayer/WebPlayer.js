import React,{Component} from 'react';
import './WebPlayer.css';
import Player from '../../Components/WebFrame/Player'

import ArtistsLibrary from '../../Components/Webplayer/YourLibrary/ArtistsLibrary'
import AlbumsLibrary from '../../Components/Webplayer/YourLibrary/AlbumsLibrary'
import Home from '../../Components/Webplayer/Home/Home'
import YourLibrary from '../../Components/Webplayer/YourLibrary/YourLibrary'
import Playlist from '../../Components/PlaylistsComponent/Playlist'
import AlbumPage from '../../Components/AlbumComponent/AlbumPage';
import LikedSongs from '../../Components/LikedSongs/LikedSongs';
import Search from '../../Components/Search/Search';
import CreatePlaylist from '../../Components/PlaylistsComponent/CreatePlaylist';
import {BrowserRouter as Router,
    Switch, 
    Route, 
   } from "react-router-dom";
import { HomePageSidebar } from '../../Components/HomePage/HomePageSidebar';
import RecentActivities from '../../Components/Notifications/RecentActivities';
import Userprofile from '../../Components/UserProfile/Userprofile';
import ShowByGenres from '../../Components/Show by Genres/ShowByGenres';




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
                <Route   path="/webplayer/playlist/" component={Playlist}/>
                <Route  exact path="/webplayer/album/" component={AlbumPage}/>
                <Route  exact path="/webplayer/likedsongs/" component={LikedSongs}/>
                <Route path="/webplayer/home" component={Home} />
                <Route exact path="/webplayer/yourlibrary"  component={YourLibrary} />
                <Route exact path="/webplayer/yourlibrary-artists"  component={ArtistsLibrary} />
                <Route exact path="/webplayer/yourlibrary-albums"  component={AlbumsLibrary} />
                <Route exact path="/webplayer/notifications"  component={RecentActivities} />
                <Route exact path="/webplayer/userprofile"  component={Userprofile} />
                <Route path ="/webplayer/showbygenres" component ={ShowByGenres}/>
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

