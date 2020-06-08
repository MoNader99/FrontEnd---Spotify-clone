import React ,{ Component} from 'react';
import './PlaylistPage.css';
import DeletePlaylist from './DeletePlaylist';
import CardMedia from '../Media/CardMedia';
import ReactSnackBar from "react-js-snackbar";
import './SnackBar.css';
import HomePageNavbar from '../HomePage/HomePageNavbar';
import {connect} from 'react-redux';
import AddToPlaylist from './AddToPlaylist';
import {Route , Switch, Redirect} from "react-router-dom";
import * as actionTypes from "../../Store/actions";
import EditPlaylist from './EditPlaylist';
import ShareSong from '../Share/ShareSong';
import { BASEURL } from '../../Constants/BaseURL';
import Rap from './Rap';
import Arabic from './Arabic';
import Pop from './Pop';
import HipHop from './HipHop';
import Oud from './Oud';
import Jazz from './Jazz';
import  PlaylistPage  from './PlaylistPage';

/** Class PlayList Page 
 * @category Genres
 * the class that routes all the genres
 * @extends Component
 */
export class Playlist extends Component
{

  render()
  {
    {document.title ="Spotify - Playlist"}
  return(
    <Switch>
                {/* <NavBar/> */}
                <Route path="/webplayer/playlist/Rap" component={Rap}></Route>
                <Route path="/webplayer/playlist/Arabic" component={Arabic}></Route>
                <Route path="/webplayer/playlist/Pop" component={Pop}></Route>
                <Route path="/webplayer/playlist/HipHop" component={HipHop}></Route>
                <Route path="/webplayer/playlist/oud" component={Oud}></Route>
                <Route path="/webplayer/playlist/jazz" component={Jazz}></Route>
                <Route path="/webplayer/playlist" component={PlaylistPage}></Route>


            </Switch>

    
  )
}
}



export default Playlist;