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
import { PlaylistPage } from './PlaylistPage';


export class Playlist extends Component
{
  state= 
  { 
    
    /** image of the playlist
     * @memberof PlaylistPage
     * @type {string}
     */
      playlistImage: "https://i.ibb.co/Q89hfcW/single-bar-note.jpg",

      /** number of songs in playlist
     * @memberof PlaylistPage
     * @type {number}
     */
      songsNumber: 0,

      /** Array of song info
     * @memberof PlaylistPage
     * @type {Array<SongInfo>}
     */
      SongInfo:[], 

    /** Show snak bar of add to liked songs
     * @memberof PlaylistPage
     * @type {boolean}
     */
      ShowAdd: false,

      /** Show snak bar of add to liked songs
     * @memberof PlaylistPage
     * @type {boolean}
     */
      ShowingAdd: false,
      
    /** Show snak bar of remove from this playlist
     * @memberof PlaylistPage
     * @type {boolean}
     */
      ShowRemove: false,

    /** Show snak bar of remove from this playlist
     * @memberof PlaylistPage
     * @type {boolean}
     */
      ShowingRemove: false,

    /** text on the play button
     * @memberof PlaylistPage
     * @type {string}
     */
      playplaylist: "Play",

    /** object tha contains playlist info
     * @memberof PlaylistPage
     * @type {object}
     */
      playlistInfo:{},

      /**artist names
     * @memberof PlaylistPage
     * @type {Array<tracks>}
     */
      ArtistNames:[],

    /**playlists tracks
     * @memberof PlaylistPage
     * @type {Array<tracks>}
     */
      playlistTracks:[],

      playlistName:"Playlist-1"
  }
  
  /**Function that is called when the component renders
   * @memberof PlaylistPage
   * @func componentDidMount
   */
  componentDidMount(){
  
    /** A variable that contains URL 
  * @memberof PlaylistPage
  * @type {string}
  */
    var url = BASEURL+ "/get-tracks"; 
  
    const requestOptions = {
      method: 'GET',
    };
    fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        // console.log(data)
        this.setState({ 
          SongInfo:data.tracks,
          songsNumber:data.tracks.length
        });
      })
      .catch((error)=>{console.log(error);
  
      })
    }
    
    /**Function to like playlist
   * @memberof PlaylistPage
   * @func likeSong
   * @param e
   */
  likeSong = e => {
     const {id} = e.target;

    /** heart icon
   * @memberof PlaylistPage
   * @type {string}
   */
     var heart=document.getElementById(id);

     heart.classList.toggle("far");
     heart.classList.toggle("fas");
  }

 /**Function to toggle play and pause button
   * @memberof PlaylistPage
   * @func playButton
   */
playButton = () => {
  if ( this.state.playplaylist === "Play" ) {
    this.setState({playplaylist: "Pause"});
  }
  else if ( this.state.playplaylist === "Pause" ) {
    this.setState({playplaylist: "Play"});
  }
}

/**Function to show snack bar
   * @memberof PlaylistPage
   * @func show
   * @param e
   */
show = e => {

   /** variable to check which snack bar is called
   * @memberof PlaylistPage
   * @type {string}
   */
  var check = e.target.id;
  if (check=="ADD"){
  this.setState({ ShowAdd: true, ShowingAdd: true });
  setTimeout(() => {
    this.setState({ ShowAdd: false, ShowingAdd: false });
  }, 2000); 
  return; 
  }
else if (check=="REMOVE"){
  this.setState({ ShowRemove: true, ShowingRemove: true });
  setTimeout(() => {
    this.setState({ ShowRemove: false, ShowingRemove: false });
  }, 2000);
  return;  
}
};

/**Function to stream tracks
   * @memberof PlaylistPage
   * @func stream
   * @param song
   */
stream=(song)=>{
  this.props.SELECT_SONG(song);
}

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

/** A function connecting component to redux store
 * @memberof PlaylistPage
 * @func mapStateToProps
 * @param {*} state 
 */
const mapStateToProps = state =>{
  return{
    userToken: state.userToken,
    PlaylistID: state.selectedPlaylistID,
    songURL: state.selectedSong
  };
};

/** A function connecting component to redux store
 * @memberof PlaylistPage
 * @func mapDispatchToProps
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {

  return {

    SELECT_SONG : (song) => dispatch ({type: actionTypes.SELECT_SONG , value: song})
  };
};


export default connect(mapStateToProps,mapDispatchToProps) (Playlist);