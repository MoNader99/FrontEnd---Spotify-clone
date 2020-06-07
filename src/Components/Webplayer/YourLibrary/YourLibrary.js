import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {BASEURL} from '../../../Constants/BaseURL';
import './YourLibrary.css';
import  HomePageNavbar  from '../../HomePage/HomePageNavbar';
import {Link} from "react-router-dom";

class YourLibrary extends Component {
    constructor() {
        super()
        this.state = {
          nowPlaying: {id: -1},
          yourLibrary:[],
          likedTracks:[],
          likes:{id:1234}
        }
    }
    componentDidMount(){
      axios.get(BASEURL+"/webplayer/yourlibrary", {
          headers: {
              'authorization': "Bearer "
          },
      })
          .then(res => {
              if(res.status === 200)
              {
                  this.setState({
                      yourLibrary: res.data.map( playList => ({
                          id:playList.id,
                          name:playList.name,
                          images:playList.images,
                          owner: playList.owner.display_name
                      }))
                  })
              }
          })
      axios.get(BASEURL+"/webplayer/yourlibrary/likes", {
      headers: {
          'authorization': "Bearer "
      },
      })
        .then(res => {
            if(res.status === 200)
            {
                this.setState({
                    likedTracks: res.data.map( track => ({
                        id:track.id,
                        name:track.name,
                        artistName: track.artists[0].name,
                    }))
                })
            }
        })
    }

    togglePlayPause(sid) {
        if(this.state.nowPlaying.id===-1)
        {
            const cardButtons=document.getElementById(sid);
            const playButton = cardButtons.querySelector('.play-btn');
            const pauseButton = cardButtons.querySelector('.pause-btn');
            playButton.classList.toggle('active-play');
            pauseButton.classList.toggle('active-pause');
            this.setState({nowPlaying: {id: sid}})
        }
        else if(this.state.nowPlaying.id===sid)
        {
            const cardButtons=document.getElementById(sid);
            const playButton = cardButtons.querySelector('.play-btn');
            const pauseButton = cardButtons.querySelector('.pause-btn');
            playButton.classList.toggle('active-play');
            pauseButton.classList.toggle('active-pause');
            this.setState({nowPlaying: {id: -1}})
        }
        else
        {
            const nowPlayingSong=document.getElementById(this.state.nowPlaying.id);
            const playButtonPrev = nowPlayingSong.querySelector('.play-btn');
            const pauseButtonPrev = nowPlayingSong.querySelector('.pause-btn');
            playButtonPrev.classList.toggle('active-play');
            pauseButtonPrev.classList.toggle('active-pause');
            const cardButtons=document.getElementById(sid);
            const playButton = cardButtons.querySelector('.play-btn');
            const pauseButton = cardButtons.querySelector('.pause-btn');
            playButton.classList.toggle('active-play');
            pauseButton.classList.toggle('active-pause');
            this.setState({nowPlaying: {id: sid}})
        }
}

    render()
    {
        {document.title ="Your Library - Spotify"}

    return(
        <div id="webplayer-library" className="container col-lg-12">
          <HomePageNavbar page="library"/>
            <div className="library-playlists-section">
                <h2 className="section-title popular-playlists">Playlists</h2>
                    <div className="card-group">
                      <div class="card likes">
                          <div class="card-body" id="likes-card">
                          <Link to="/webplayer/likedsongs/">
                            <p class="card-text">{this.state.likedTracks.map( track => (
                                  <div className="track-name">{track.name}<strong>{ track.artistName}</strong> • </div>
                              )
                              )}</p>
                          </Link>
                              <div id={this.state.likes.id}>
                                  <button id={this.state.likes.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(this.state.likes.id)}><i className="fa fa-play"></i></button>
                                  <button id={this.state.likes.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(this.state.likes.id)}><i className="fa fa-pause"></i></button>
                              </div>
                          </div>
                          <div class="card-footer">
                              <h3>Likes</h3>
                              <h6>{this.state.likedTracks.length} Likes</h6>
                          </div>
                      </div>
                    {this.state.yourLibrary.map( playList => (
                        <div>
                            <div className="card" id={playList.id}>
                                    <img src={playList.images} className="card-img-top" alt="..."></img>
                                    <div className="card-body" id="playlists-cards">
                                        <h5 className="card-title">{playList.name}</h5>
                                        <p className="card-text">{playList.owner}</p>
                                        <div id={playList.id}>
                                            <button id={playList.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-play"></i></button>
                                            <button id={playList.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playList.id)}><i className="fa fa-pause"></i></button>
                                        </div>
                                    </div> 
                                </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
    }
}

export default YourLibrary;