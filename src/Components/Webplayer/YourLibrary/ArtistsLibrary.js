import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './YourLibrary.css';

class ArtistsLibrary extends Component {
    constructor() {
        super()
        this.state = {
          nowPlaying: {id: -1},
          artists:[],
        }
    }
    componentDidMount(){
        axios.get("http://spotify.mocklab.io"+"/artists", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        artists: res.data.data.map( artist => ({
                            id:artist._id,
                            name:artist.name,
                            imageUrl:artist.images[0],
                        }))
                    })
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
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
            <div className="popular-artists-section">
                <h2 className="section-title popular-artists">Artists</h2>
                <div className="card-group">
                    {this.state.artists.map( artist => (
                        <div>
                                <div className="card" id={artist.id}>                                        
                                <img src={artist.imageUrl} className="card-img-top rounded-circle" alt="..."></img>
                                        <div className="card-body">
                                            <h5 className="card-title">{artist.name}</h5>
                                            <p className="card-text">artist</p>
                                            <div id={artist.id}>
                                                <button className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(artist.id)}><i className="fa fa-play"></i></button>
                                                <button className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(artist.id)}><i className="fa fa-pause"></i></button>
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

export default ArtistsLibrary;