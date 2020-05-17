import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import {Link} from 'react-router-dom';
import './YourLibrary.css';

class YourLibrary extends Component {
    constructor() {
        super()
        this.state = {
          nowPlaying: {id: -1},
          yourLibrary:[{
            "collaborative" : false,
            "description" : "",
            "external_urls" : {
              "spotify" : "https://open.spotify.com/playlist/2D7zjHWyRq40cWbXrYrBpN"
            },
            "href" : "https://api.spotify.com/v1/playlists/2D7zjHWyRq40cWbXrYrBpN",
            "id" : "2D7zjHWyRq40cWbXrYrBpN",
            "images" : "https://dalelyles.com/musicmp3s/no_cover.jpg",
            "name" : "test",
            "owner" : {
              "display_name" : "IbrahimWael",
              "external_urls" : {
                "spotify" : "https://open.spotify.com/user/p7rn84u55259bk01e6fxhlgwk"
              },
              "href" : "https://api.spotify.com/v1/users/p7rn84u55259bk01e6fxhlgwk",
              "id" : "p7rn84u55259bk01e6fxhlgwk",
              "type" : "user",
              "uri" : "spotify:user:p7rn84u55259bk01e6fxhlgwk"
            },
            "primary_color" : null,
            "public" : true,
            "sharing_info" : {
              "share_id" : "NjG_sfMGTRGs_YgyfogHBg",
              "share_url" : "https://open.spotify.com/playlist/2D7zjHWyRq40cWbXrYrBpN?si=NjG_sfMGTRGs_YgyfogHBg",
              "uri" : "spotify:playlist:2D7zjHWyRq40cWbXrYrBpN"
            },
            "snapshot_id" : "MSw5YjU3ODIwNWYyMTAxOGNlMzJhMTEwYTQ2NmU5NzVkOTk2ZDYyMzFm",
            "tracks" : {
              "href" : "https://api.spotify.com/v1/playlists/2D7zjHWyRq40cWbXrYrBpN/tracks",
              "total" : 0
            },
            "type" : "playlist",
            "uri" : "spotify:playlist:2D7zjHWyRq40cWbXrYrBpN"
          }, {
            "collaborative" : false,
            "description" : "",
            "external_urls" : {
              "spotify" : "https://open.spotify.com/playlist/37Shz0XTpubuX0fomWGjCz"
            },
            "href" : "https://api.spotify.com/v1/playlists/37Shz0XTpubuX0fomWGjCz",
            "id" : "37Shz0XTpubuX0fomWGjCz",
            "images" : "https://dalelyles.com/musicmp3s/no_cover.jpg",
            "name" : "herherre",
            "owner" : {
              "display_name" : "IbrahimWael",
              "external_urls" : {
                "spotify" : "https://open.spotify.com/user/p7rn84u55259bk01e6fxhlgwk"
              },
              "href" : "https://api.spotify.com/v1/users/p7rn84u55259bk01e6fxhlgwk",
              "id" : "p7rn84u55259bk01e6fxhlgwk",
              "type" : "user",
              "uri" : "spotify:user:p7rn84u55259bk01e6fxhlgwk"
            },
            "primary_color" : null,
            "public" : true,
            "sharing_info" : {
              "share_id" : "kp_J2FAcTUeyOa-5Kw-jQg",
              "share_url" : "https://open.spotify.com/playlist/37Shz0XTpubuX0fomWGjCz?si=kp_J2FAcTUeyOa-5Kw-jQg",
              "uri" : "spotify:playlist:37Shz0XTpubuX0fomWGjCz"
            },
            "snapshot_id" : "MSwxMzk4ZDg1NDE1NTc4NGY4ZjM3OTQ3M2QxZjhjNmM1ZGMwNDkxY2Fk",
            "tracks" : {
              "href" : "https://api.spotify.com/v1/playlists/37Shz0XTpubuX0fomWGjCz/tracks",
              "total" : 0
            },
            "type" : "playlist",
            "uri" : "spotify:playlist:37Shz0XTpubuX0fomWGjCz"
          }],
          likedTracks:[{
            "name": "lovely",
            "_id": "string",
            "album": {},
            "trackNumber": 0,
            "artists": [
              {
                "role": "user",
                "name": "Billie Eilish",
                "email": "string",
                "gender": "string",
                "dateOfBirth": "1981-11-5",
                "uri": "string",
                "href": "string",
                "images": "string",
                "followers": [
                  "string"
                ],
                "following": [
                  "string"
                ],
                "userStats": {
                  "followersNumber": 0,
                  "followingNumber": 0,
                  "playlistsNumber": 0
                },
                "artistInfo": {}
              }
            ],
            "type": "string",
            "isLocal": true,
            "durationMs": 0,
            "externalIds": [
              {
                "id": "string"
              }
            ],
            "externalUrls": [
              {
                "url": "https://open.spotify.com/track/6kLCHFM39wkFjOuyPGLGeQ"
              }
            ],
            "uri": "string",
            "href": "string",
            "popularity": 20000000
          },
          {
            "name": "KDA W KDA",
            "_id": "string",
            "album": {},
            "trackNumber": 0,
            "artists": [
              {
                "role": "user",
                "name": "Wegz",
                "email": "string",
                "gender": "string",
                "dateOfBirth": "1981-11-5",
                "uri": "string",
                "href": "string",
                "images": "string",
                "followers": [
                  "string"
                ],
                "following": [
                  "string"
                ],
                "userStats": {
                  "followersNumber": 0,
                  "followingNumber": 0,
                  "playlistsNumber": 0
                },
                "artistInfo": {}
              }
            ],
            "type": "string",
            "isLocal": true,
            "durationMs": 0,
            "externalIds": [
              {
                "id": "string"
              }
            ],
            "externalUrls": [
              {
                "url": "https://open.spotify.com/track/6kLCHFM39wkFjOuyPGLGeQ"
              }
            ],
            "uri": "string",
            "href": "string",
            "popularity": 20000000
          }],
          likes:{id:1234}
        }
    }
    /*componentDidMount(){
        axios.get(this.context.baseURL+"/playlists/top", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9,
                sort: "-releaseDate"
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        mostRecentPlayLists: res.data.data.playlist.map( playList => ({
                            id:playList._id,
                            title:playList.name,
                            imageUrl:playList.images[0],
                            description: playList.description
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
    }*/

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
            <div className="library-playlists-section">
                <h2 className="section-title popular-playlists">Playlists</h2>
                    <div className="card-group">
                    <div class="card likes">
                        <div class="card-body" id="likes-card">
                            <p class="card-text">{this.state.likedTracks.map( track => (
                                <div className="track-name">{track.name}<strong>{track.artists[0].name}</strong> • </div>
                            )
                            )}</p>
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
                                        <p className="card-text">{playList.owner.display_name}</p>
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