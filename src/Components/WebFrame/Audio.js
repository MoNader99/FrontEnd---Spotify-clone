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


/**
 * the audio component which get the song clicked on by the user to be streamed
 */
class Audio_Player extends Component   
{ 
  render(){
    console.log(this.props.songURL.songURL)
  return(
  <AudioPlayer
    src={this.props.songURL.songURL}
    showJumpControls={false}
    layout='stacked-reverse'
    showSkipControls
    
  />
  )
  }
};

const mapStateToProps = state =>{
  return{
    songURL: state.selectedSong,
  };
};
export default connect(mapStateToProps) (Audio_Player);
