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
import { ShareSong } from '../Share/ShareSong';
import { BASEURL } from '../../Constants/BaseURL';

export class PlaylistPage extends Component
{
  state= 
  { 
    
      playlistImage: "https://i.ibb.co/Q89hfcW/single-bar-note.jpg",
      songsNumber: 0,
      SongInfo:[],  
      ShowAdd: false,
      ShowingAdd: false,
      ShowRemove: false,
      ShowingRemove: false,
      playplaylist: "Play",
      playlistInfo:{},
      ArtistNames:[],
      playlistTracks:[]
  }
  
  componentDidMount(){
  
    var url = BASEURL+ "/pop"; 
  
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
    
  likeSong = e => {
     const {id} = e.target;
     var heart=document.getElementById(id);

     heart.classList.toggle("far");
     heart.classList.toggle("fas");
  }

  toggle_add_to_playlist()
{
  var blur_add_to_playlist=document.getElementById('blur-add-to-playlist');
  if (blur_add_to_playlist!=null){
  blur_add_to_playlist.classList.toggle('activate')
  }
  var popup_add_to_playlist=document.getElementById('popup-add-to-playlist');
  if (popup_add_to_playlist!=null){
  popup_add_to_playlist.classList.toggle('activate')
}
}

playButton = e => {
  const {id} = e.target;
  if ( this.state.playplaylist === "Play" ) {
    this.setState({playplaylist: "Pause"});
  }
  else if ( this.state.playplaylist === "Pause" ) {
    this.setState({playplaylist: "Play"});
  }
}

show = e => {
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

stream=(song)=>{
  this.props.SELECT_SONG(song);
}

  render()
  {
    const Card = () => {
        
        const datas = this.state.SongInfo.slice(0,1).map((user,i)=>{ 
          return <CardMedia image={this.state.SongInfo[i].imgURL} />})
       return (
           <div>
               {datas}
           </div>
       )
      }
  return(
    <div>
  <div className="pop">
   <HomePageNavbar/>
      <div className="content-spacing">
        <div className="row" >
          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
            <Card /> 
              

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
                  <a className="dropdown-item drop-class" href="#" id="ADD" value="ShowAdd" onClick={(e) => {this.show(e);}}  >Add to your liked songs</a>
                  <a className="dropdown-item drop-class" data-toggle="modal" data-target="#add-to-playlist" href="#">Add to playlist</a>
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
      <EditPlaylist/>
      <AddToPlaylist/>
      <ShareSong share={this.props.songURL} />
    </div>
    
    </div>
    
  )
}
}
const mapStateToProps = state =>{
  return{
    userToken: state.userToken,
    PlaylistID: state.selectedPlaylistID,
    songURL: state.selectedSong
  };
};

const mapDispatchToProps = dispatch => {

  return {

    SELECT_SONG : (song) => dispatch ({type: actionTypes.SELECT_SONG , value: song})
  };
};


export default connect(mapStateToProps,mapDispatchToProps) (PlaylistPage);