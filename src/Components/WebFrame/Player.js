import React, { Component } from 'react'
import './Player.css'
import Audio_Player from './Audio'
import {connect} from 'react-redux';
/**
 * the footer of the web frame 
 * it holds the name , image and link of the song  will be played
 */
class Player extends Component{
    constructor(){
        super()
    }
    render(){
        var song={ 
            imgURL:"",
            SongName:"",
            Artist:""
         }
        if(this.props.songURL!=null){
            song = this.props.songURL
        }
    return (
        <nav className='fixed-bottom Player-Footer bt  b--black'>
            <div className='song-img '>
                <div className='img-style'><img className='image' src={song.imgURL}></img></div>
                <div className='ml2'>
                    <p className='white mb0 desc'>{song.SongName}</p>
                    <p id='band' className='f7 lh-copy'>{song.Artist}</p>
            <div><i class="fas fa-share"></i></div>

                </div>
            </div>
            <Audio_Player></Audio_Player>

        </nav>
    )
    }
}
const mapStateToProps = state =>{
    return{
      songURL: state.selectedSong,
    };
  };
  export default connect(mapStateToProps) (Player);