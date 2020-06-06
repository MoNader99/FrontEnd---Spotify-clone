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
import { ShareSong } from '../Share/ShareSong';
import { BASEURL } from '../../Constants/BaseURL';
import Rap from './Rap';
import Arabic from './Arabic';
import Pop from './Pop';
import HipHop from './HipHop';
import Oud from './Oud';
import Jazz from './Jazz';


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
  return(
    <Switch>
                {/* <NavBar/> */}
                <Route path="/webplayer/playlist/Rap" component={Rap}></Route>
                <Route path="/webplayer/playlist/Arabic" component={Arabic}></Route>
                <Route path="/webplayer/playlist/Pop" component={Pop}></Route>
                <Route path="/webplayer/playlist/HipHop" component={HipHop}></Route>
                <Route path="/webplayer/playlist/oud" component={Oud}></Route>
                <Route path="/webplayer/playlist/jazz" component={Jazz}></Route>
                <Route path="/webplayer/playlist" component={Jazz}></Route>


                
                

               

            </Switch>

    
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