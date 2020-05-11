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

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path="/" component={welcomePage}/>
          <Route  exact path="/signup/" component={SignUp}/>
          <Route  exact path="/login/" component={Login}/>
          <Route  exact path="/webplayer/search/" component={Search}/>
          <Route  exact path="/webplayer/playlist/" component={PlaylistPage}/>
          <Route  exact path="/webplayer/album/" component={AlbumPage}/>
          <Route  exact path="/webplayer/likedsongs/" component={LikedSongs}/>
          {/* TODO: add routes to the other pages */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
