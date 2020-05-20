import React from 'react';
import './App.css';

import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";

import welcomePage from "./Containers/welcomePage/welcomePage";
import SignUp from "./Components/SignUp/SignUp";
import Search from './Components/Search/Search';
import Login from './Components/Login/Login';
import PlaylistPage from './Components/PlaylistsComponent/PlaylistPage'
import { AlbumPage } from './Components/AlbumComponent/AlbumPage';
import LikedSongs from './Components/LikedSongs/LikedSongs';
import AccountSettings from './Components/Profile/AccountSettings.js'
import EditProfile from './Components/Profile/EditProfile.js'
import NotificationsSettings from './Components/Profile/NotificationSettings.js';
import ChangePasswrod from './Components/Profile/ChangePassword';
import Home from './Components/Webplayer/Home/Home'
import YourLibrary from './Components/Webplayer/YourLibrary/YourLibrary'
import Premium from './Containers/Premium'
import Audience from './Components/Artist/ArtistProfile/Audience'
import ArtistsLibrary from './Components/Webplayer/YourLibrary/ArtistsLibrary'
import AlbumsLibrary from './Components/Webplayer/YourLibrary/AlbumsLibrary'
import AddAlbum from './Components/Artist/ArtistProfile/AddAlbum'
import {WebFrame} from './Containers/WebFrame'

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/account-overview" component={AccountSettings}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path="/notification-settings" component={NotificationsSettings}/>
          <Route path="/change-password" component={ChangePasswrod}/>
          <Route path="/webplayer" exact component={Home} />
          <Route path="/webplayer/yourlibrary" exact component={YourLibrary} />
          <Route exact path="/webplayer/yourlibrary/artists" exact component={ArtistsLibrary} />
          <Route exact path="/webplayer/yourlibrary/albums" exact component={AlbumsLibrary} />
          <Route  exact path="/artist/audience" component={Audience}/>
          <Route  exact path="/artist/addalbum" component={AddAlbum}/>
          <Route exact path="/" component={welcomePage}/>
          <Route  exact path="/signup/" component={SignUp}/>
          <Route  exact path="/login/" component={Login}/>
          <Route  exact path="/webplayer/search/" component={Search}/>
          <Route  exact path="/webplayer/playlist/" component={PlaylistPage}/>
          <Route  exact path="/webplayer/album/" component={AlbumPage}/>
          <Route  exact path="/webplayer/likedsongs/" component={LikedSongs}/>
          <Route exact path="/premium/" component={Premium}></Route>
          {/* <Route exact path="/frame/" component={WebFrame}></Route> */}
          <Route exact path='/frame/'>
              <WebFrame></WebFrame>
          </Route>

          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
