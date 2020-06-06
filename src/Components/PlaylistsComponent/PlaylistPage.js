import React ,{ Component} from 'react';
import './PlaylistPage.css';
import DeletePlaylist from './DeletePlaylist';
import CardMedia from '../Media/CardMedia';
import ReactSnackBar from "react-js-snackbar";
import './SnackBar.css';
import HomePageNavbar from '../HomePage/HomePageNavbar';
import {connect} from 'react-redux';
import AddToPlaylist from './AddToPlaylist';
import * as actionTypes from "../../Store/actions";
import EditPlaylist from './EditPlaylist';
import ShareSong from '../Share/ShareSong';
import { BASEURL } from '../../Constants/BaseURL';

export class PlaylistPage extends Component
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

      playlistName:"Playlist"
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
    <div>
  <div className="playlist-page">
   <HomePageNavbar/>
      <div className="content-spacing">
        <div className="row" >
          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
            <CardMedia image={this.state.playlistImage} /> 
              

					  <li> <h3> {this.state.playlistInfo.playlistName} </h3> </li>
					  <li> <h5> {this.state.playlistInfo.userId} </h5></li>
            <li >
               <a id="play-button" href="#" onClick={this.playButton} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> {this.state.playplaylist}</a>
            </li>
            <li  className="d-flex justify-content-around">
            <button id="like-song" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
             
            
          <div className="dropdown ">
              <a className="card-menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
              <div className="dropdown-menu card-dropdown-content ">
              <a className="dropdown-item drop-class" data-toggle="modal" data-target="#edit"  href="#">Edit Playlist</a>
              <a className="dropdown-item drop-class" data-toggle="modal" data-target="#delete" href="#">Delete</a>
              
          </div>

          </div>
            </li>
            <li > <div style={{color:"#b3b3b3"}}> {this.state.songsNumber} Songs</div> </li>
					</ul>
          </div>
        <div className="col-12 col-lg-7 col-xl-8">
        {this.state.songsNumber == 0 ? 

        <div>
          <div className=" d-flex justify-content-center fas fa-headphones mb-3"> </div>
          <h1 className="d-flex justify-content-center font-weight-bolder">It's a bit empty here...</h1> 
          <h5 className="d-flex justify-content-center mt-3">Let's find some songs for your playlist.</h5>
          <div className="d-flex justify-content-center">
            <a className=" btn btn-light text-dark rounded-pill text-center px-5 py-2 px-4 mt-3 font-weight-bold " href="/webplayer/HomePage" >Discover</a>
          </div>
          
          
          <div className="row mt-5 mb-2">
              <div className="col-xl-10 col-md-9 col-8 col-6">
              <ul className="list-unstyled">
                <li className="Suggested d-flex align-items-start" >Suggested Tracks</li>
                <li className="Suggested-text d-flex align-items-start" >Based on the songs in this song list</li>
              </ul>
              </div>
              <div className="col-xl-2 col-md-2 col-2 col-2">
                <a className=" btn btn-outline-dark text-light rounded-pill text-center px-5 py-2 mt-3 font-weight-bold " href="#" >update</a>
              </div>
          </div>

          <div className="songs">
            <div className="row">
              <div className="col-xl-1 col-md-1 col-1 col-2">
               <div className="music-sign mt-2 mx-4 "> </div>
              </div>
              <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
              <ul className="list-unstyled ">
                  <li className="d-flex align-items-start">Song name</li>
                  <li className="song-info"><a href='/webplayer/artistprofile/'>Artist Name</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'> Album Name </a></li>
              </ul>
              </div>
              <div className="col-xl-2 col-md-4 col-sm-4 col-4 d-flex justify-content-end">
                <a className=" add-button btn btn-outline-dark rounded-pill text-light  text-center px-4 py-2 mt-3 font-weight-bold " href="#" >ADD</a>
              </div>
            </div>
          </div>

        </div>
          
          : 
          
          this.state.SongInfo.map((song,index)=>(
          <div onClick={() =>this.stream(song)} key={index} className="songs">
            <div  className="row">
              <div className="col-xl-1 col-md-1 col-1 col-2">
               <div className="music-sign mt-2 mx-4 "> </div>
              </div>
              <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
              <ul className="list-unstyled">
                  <li className="d-flex align-items-start">{song.SongName}</li>
                  <li className="song-info"><a href='/webplayer/artistprofile/'>{song.Artist} </a> <span className="font-weight-bold"> . </span> <a href='/webplayer/album'> {song.AlbumName} </a></li>
              </ul>
              </div>
              <div className="col-xl-1 col-md-2 col-sm-2 col-2">
              <div className="dropdown d-flex align-items-center ">
                <a className="song-menu Menu mt-4" href="/account" id="Dropdown" data-toggle="dropdown" > ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                  <a className="dropdown-item drop-class" id="ADD" value="ShowAdd" onClick={(e) => {this.show(e);}}  >Add to your liked songs</a>
                  <a className="dropdown-item drop-class" data-toggle="modal" data-target="#add-to-playlist" >Add to playlist</a>
                <a className="dropdown-item drop-class" data-toggle="modal" data-target="#share-song">Share Song</a>

                  </div>
                </div>
              </div>
              <div className="col-xl-1 col-md-2 col-sm-2 col-2">
                <div className="d-flex align-items-center duration mt-4">{song.Duration}</div>
              </div>
            </div>
          </div>
        ))}
    <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowAdd}>
                      Added To Your Liked Songs
    </ReactSnackBar>

    <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowRemove}>
                      Removed From This Playlist
    </ReactSnackBar>
      </div> 
      </div>
      </div>
      <DeletePlaylist delete={this.state.playlistInfo.playlistName} />
      <EditPlaylist playlistname={this.state.playlistName}/>
      <AddToPlaylist/>
      <ShareSong />
    </div>
    
    </div>
    
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


export default connect(mapStateToProps,mapDispatchToProps) (PlaylistPage);