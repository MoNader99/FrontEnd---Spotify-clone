import React ,{ Component} from 'react';
import './AlbumPage.css';
import CardMedia from '../Media/CardMedia';
import ReactSnackBar from "react-js-snackbar";
import {connect} from 'react-redux';
import AddToPlaylist from '../PlaylistsComponent/AddToPlaylist';
import * as actionTypes from "../../Store/actions";
import ShareSong from '../Share/ShareSong';
import HomePageNavbar from '../HomePage/HomePageNavbar';
import {BASEURL} from '../../Constants/BaseURL'

/** Class AlbumPage 
 * @category AlbumPage
 * @extends Component
 */
export class AlbumPage extends Component
{
  state= 
{ 
  /**Array of Song Info
   * @memberof AlbumPage
   * @type {Array<songs>}
   */
    SongInfo: [
      {id : 1, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      {id : 2, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      {id : 3, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
      {id : 4, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      {id : 5, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      {id : 6, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
      {id : 7, SongName : "Perfect", Singer: "Ed Sheran",Duration : "3:52"},
      {id : 8, SongName : "Galway girl", Singer: "Ed Sheran",Duration : "4:15"},
      {id : 9, SongName : "Shape of you", Singer: "Ed Sheran",Duration : "2:58"},
    ],

  /** Album image
   * @memberof AlbumPage
   * @type {sring}
   */
    AlbumImage: "https://i.ibb.co/Q89hfcW/single-bar-note.jpg",

    /**Album name
   * @memberof AlbumPage
   * @type {sring}
   */
    AlbumName: "Perfect",

    /**Artist Name that own the album
   * @memberof AlbumPage
   * @type {sring}
   */
    Artist: "Ed sheran",

    /**Number of songs in the album
   * @memberof AlbumPage
   * @type {sring}
   */
    songsNumber: "",

    /**Show snakbar of add songs to liked songs
   * @memberof AlbumPage
   * @type {boolean}
   */
    ShowAdd: false,

    /**Show snakbar of add songs to liked songs
   * @memberof AlbumPage
   * @type {boolean}
   */
    ShowingAdd: false,

    /**Show snak bar of save to library
   * @memberof AlbumPage
   * @type {boolean}
   */
    ShowSave: false,
    
    /**Show snak bar of save to library
   * @memberof AlbumPage
   * @type {boolean}
   */
    ShowingSave: false,

    /**text changing on the play button
   * @memberof AlbumPage
   * @type {string}
   */
    playAlbum: "Play",

    /**object of album info
   * @memberof AlbumPage
   * @type {object}
   */
    AlbumInfo: {},

    /**Array of songs in album
   * @memberof AlbumPage
   * @type {Array<songs>}
   */
    AblumSongs: [],

    /**check whether the user is normal user or artist
   * @memberof AlbumPage
   * @type {boolean}
   */
    Artist:false,
    
}
 /**Function that is called when the component renders
   * @memberof AlbumPage
   * @func componentDidMount
   */
componentDidMount(){
  
  /** A variable that contains URL 
  * @memberof AlbumPage
  * @type {string}
  */
  var url = BASEURL +"/get-tracks"; 

  const requestOptions = {
    method: 'GET',
  };
  fetch(url,requestOptions)
    .then((response) => { return response.json()})
    .then((data) => {
      // console.log(data)
      this.setState({ 
        SongInfo:data.tracks
      });

    })
    .catch((error)=>{console.log(error);

    })
  }
  
   /**Function to like playlist
   * @memberof AlbumPage
   * @func likeSong
   * @param r
   */
  likeSong = r => {
    const {id} = r.target;
   
    /** heart icon
   * @memberof AlbumPage
   * @type {string}
   */
    var heart=document.getElementById(id);
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
  }

 /**Function to toggle play and pause button
   * @memberof AlbumPage
   * @func playButton
   */
playButton = () => {
  if ( this.state.playAlbum === "Play" ) {
    this.setState({playAlbum: "Pause"});
  }
  else if ( this.state.playAlbum === "Pause" ) {
    this.setState({playAlbum: "Play"});
  }
}

 /**Function to show snack bar
   * @memberof AlbumPage
   * @func show
   * @param e
   */
show = e => {

   /** variable to check which snack bar is called
   * @memberof AlbumPage
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
else if (check=="SAVE"){
  this.setState({ ShowSave: true, ShowingSave: true });
  setTimeout(() => {
    this.setState({ ShowSave: false, ShowingSave: false });
  }, 2000);
  return;  
}
}

 /**Function to stream tracks
   * @memberof AlbumPage
   * @func stream
   * @param song
   */
stream=(song)=>{
  this.props.SELECT_SONG(song);
}

  render(){
    {document.title ="Spotify - Album"}
    // console.log(this.props.artist)
  return(
  <div className="album-page">
     <HomePageNavbar />
      <div className="content-spacing">
        <div className="row" >
                                             {/* Crad Element */}

          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">

             <li> <CardMedia className="play-pause" image={this.state.AlbumImage} /> </li>

					  <li> <h3> {this.state.AlbumInfo.albumName} </h3> </li>
					  <li> <h5> {this.state.Artist} </h5> </li>

            <li> <button id="play-button" onClick={this.playButton} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> {this.state.playAlbum}</button> </li>
            {this.state.Artist==true ?
            <li> <a href="/artist/addsong" className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> Add New Song </a> </li>
            : null }
            <li >
              <button id="like-song" className="far fa-heart" title="Save to your Liked Songs" onClick={this.likeSong}> </button>
              <div className="dropdown ">
              <a className="card-menu" href="/account" id="Dropdown" data-toggle="dropdown">  ••• </a>
              <div className="dropdown-menu card-dropdown-content ">
              <a className="dropdown-item drop-class" href="#" id="SAVE" value="ShowSave" onClick={this.show}>Save To Your Library</a>
              <a className="dropdown-item drop-class" data-toggle="modal" data-target="#add-to-playlist" href="">Add To Playlist</a>
              </div>
              </div>
            </li>
            <li> <div style={{color:"#b3b3b3"}}> {this.state.songsNumber} Songs </div></li>
					</ul>
          </div>

                                              {/* Song Info */}

          <div className="col-xs-12  col-lg-7 col-xl-8 ">
                                            {/* display songs */}
          {this.state.SongInfo.map((song,index)=>(
            <div key={index} onClick={() =>this.stream(song)} className="songs">
            <div className="row">
              <div className="col-xl-1 col-md-1 col-1 col-2">
               <div className="music-sign mt-2 mx-4 "> </div>
              </div>
              <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
              <ul className="list-unstyled">
                  <li className="d-flex align-items-start">{song.SongName}</li>
                  <li className="d-flex align-items-start song-info"><a href='/webplayer/artistprofile/'>{song.Artist}</a></li>
              </ul>
              </div>
              <div className="col-xl-1 col-md-2 col-sm-2 col-2">
              <div className="dropdown d-flex align-items-center ">
                <a className="song-menu Menu mt-4" href="/account" id="Dropdown" data-toggle="dropdown" > ••• </a>
                  <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                  <a className="dropdown-item drop-class" href="#" id="ADD" value="ShowAdd" onClick={(e) => {this.show(e);}}  >Add to your liked songs</a>
                  <a className="dropdown-item drop-class" data-toggle="modal" data-target="#add-to-playlist" href="#">Add to playlist</a>
                  <a className="dropdown-item drop-class" href="#" id="SAVE" value="ShowSave" onClick={this.show}>Save To Your Library</a>
                  <a className="dropdown-item drop-class" data-toggle="modal" data-target="#share-song">Share Song</a>
                  
                  {this.state.Artist==true ?
                  <a className="dropdown-item drop-class" href="/artist/addsong" >Edit</a>
                  : null }

                  {this.state.Artist==true ?
                  <a className="dropdown-item drop-class" href="/artist/addsong" >Delete</a>
                  : null }

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

          <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowSave}>
                      Saved To Your Library
          </ReactSnackBar>
           </div> 
          </div>
      </div>
      <AddToPlaylist/>
      <ShareSong/>
    </div>
  )
}
}

/**A function connecting component to redux store
 * @memberof AlbumPage
 * @func mapStateToProps
 *  @param {*} state 
 */
const mapStateToProps = state =>{
  return{
    userToken: state.userToken,
    songURL: state.selectedSong,
  };
};
 /** A function connecting component to redux store
 * @memberof AlbumPage
 * @func mapDispatchToProps
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {

  return {

    SELECT_SONG : (song) => dispatch ({type: actionTypes.SELECT_SONG , value: song})
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (AlbumPage);