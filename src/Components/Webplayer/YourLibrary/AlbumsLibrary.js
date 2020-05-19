import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './YourLibrary.css';

class AlbumsLibrary extends Component {
    constructor() {
        super()
        this.state = {
          nowPlaying: {id: -1},
          popularAlbums:[],
        }
    }
    componentDidMount(){
        axios.get("http://spotify.mocklab.io"+"/albums/top",{
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9,
                sort: "-popularity"
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        popularAlbums: res.data.data.albums.map( album => ({
                            id:album._id,
                            title:album.name,
                            imageUrl:album.image,
                            artist:album.artists[0].name
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
            <div className="popular-albums-section">
                    <h2 className="section-title popular-albums">Albums</h2>
                    <div className="card-group">
                        {this.state.popularAlbums.map( album => (
                            <div>
                                <div className="card" id={album.id}>
                                    <img src={album.imageUrl} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{album.title}</h5>
                                        <p className="card-text">{album.artist}</p>
                                        <div id={album.id}>
                                            <button id={album.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-play"></i></button>
                                            <button id={album.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(album.id)}><i className="fa fa-pause"></i></button>
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

export default AlbumsLibrary;