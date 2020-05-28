import React from 'react';
import './App.css';

import {BrowserRouter as Router,
  Switch, 
  Route, 
 } from "react-router-dom";

import welcomePage from "./Containers/welcomePage/welcomePage";
import SignUp from "./Components/SignUp/SignUp";
import Login from './Components/Login/Login';
import AccountSettings from './Components/Profile/AccountSettings.js'
import EditProfile from './Components/Profile/EditProfile.js'
import NotificationsSettings from './Components/Profile/NotificationSettings.js';
import ChangePasswrod from './Components/Profile/ChangePassword';
import Premium from './Containers/Premium'
import Audience from './Components/Artist/ArtistProfile/Audience'
import AddAlbum from './Components/Artist/ArtistProfile/AddAlbum'
import WebPlayerPage from './Containers/WebPlayer/WebPlayer';
import AddSong from './Components/Artist/ArtistProfile/AddSong';
import HelpPage from './Components/Help/HelpPage'

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route exact path="/" component={welcomePage}/>
          <Route path="/account-overview" component={AccountSettings}/>
          <Route path="/edit-profile" component={EditProfile}/>
          <Route path="/notification-settings" component={NotificationsSettings}/>
          <Route path="/change-password" component={ChangePasswrod}/>
          <Route  exact path="/signup/" component={SignUp}/>
          <Route  exact path="/login/" component={Login}/>
          <Route exact path="/premium/" component={Premium}/>
          <Route  path="/webplayer/" component={WebPlayerPage}/>
          <Route  exact path="/artist/audience" component={Audience}/>
          <Route  exact path="/artist/addalbum" component={AddAlbum}/>
          <Route  exact path="/artist/addsong" component={AddSong}/>
          <Route exact path="/help/" component={HelpPage}/>
          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
