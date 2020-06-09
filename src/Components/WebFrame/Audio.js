import React ,{ Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import {useSelector,useDispatch} from 'react-redux'
// import {Stream} from '../Redux/songs/StreamActions'
import './Audio.css'
// import cairokee from './cairokee.mp3'
import {connect} from 'react-redux';
import { BASEURL } from '../../Constants/BaseURL';
import * as actionTypes from "../../Store/actions";


/**
 * the audio component which get the song clicked on by the user to be streamed
 */
class Audio_Player extends Component   
{ 
  constructor( props ) {
	super( props );
  this.state={
    song:"",
    playlist:[],
    playlistLength:0
  }
  }
  
  componentDidMount(){
    if(this.props.song!=null){
      this.state.song=this.props.song
    }
    var url = BASEURL+"/get-tracks"; 
  
    const requestOptions = {
      method: 'GET',
    };
    fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        // console.log(data)
        this.setState({ 
          playlist:data.tracks,
          playlistLength:data.tracks.length
        });

      })
      .catch((error)=>{console.log(error);
  
      })
    }


  
    Next=e=>{
    var index = Number(this.state.song._id)-1
    if(index==this.state.playlistLength-1){
      this.state.song=this.state.playlist[0]
    }
    else{
      this.state.song=this.state.playlist[index+1]
    }
    this.props.SELECT_SONG(this.state.song);
    }

    Previous=e=>{
      var index = Number(this.state.song._id)-1
      if(index==0){
        this.state.song=this.state.playlist[this.state.playlistLength-1]
      }
      else{
        this.state.song=this.state.playlist[index-1]
      }
      this.props.SELECT_SONG(this.state.song);
    }

  render(){
    this.state.song=this.props.song
  return(
  <AudioPlayer
    src={this.state.song.songURL}
    showJumpControls={false}
    layout='stacked-reverse'
    showSkipControls
    onClickNext={this.Next}
    onClickPrevious={this.Previous}
  />
  )
  }
};

const mapStateToProps = state =>{
  return{
    song: state.selectedSong,
  };
};
const mapDispatchToProps = dispatch => {

  return {

    SELECT_SONG : (song) => dispatch ({type: actionTypes.SELECT_SONG , value: song})
  };
};
export default connect(mapStateToProps,mapDispatchToProps) (Audio_Player);
