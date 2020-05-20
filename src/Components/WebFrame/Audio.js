import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
// import 'react-h5-audio-player/lib/styles.less' Use LESS
// import 'react-h5-audio-player/src/styles.scss' Use SASS
import {useSelector,useDispatch} from 'react-redux'
// import {Stream} from '../Redux/songs/StreamActions'
import './Audio.css'
// import cairokee from './cairokee.mp3'

/**
 * the audio component which get the song clicked on by the user to be streamed
 */
const Player = () => {
// const Song =useSelector(state=>state.stream.songs)
// const state = useSelector(state=>
//   state.stream
// )
// console.log("the state is ",state)
  return(
  <AudioPlayer
    autoPlay
    //onPlay={e => console.log("onPlay")}
    showJumpControls={false}
    layout='stacked-reverse'
    showSkipControls

    // other props here
  />
  )
};

export default Player