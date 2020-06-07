import React, { Component } from 'react';
import './WebplayerHome.css'
import axios from 'axios'
import {Link} from 'react-router-dom';
import  HomePageNavbar  from '../../HomePage/HomePageNavbar';

class Home extends Component {
     constructor(){
         super()
         this.state = {
            
             recentlyPlayed:[],
             
             popularPlayLists:[],
            
             mostRecentPlayLists:[],
             
             popularAlbums:[],
            
             mostRecentAlbums:[],
             
             catagories:[],
             
             firstCategory:[],
              
             secondCategory:[],
             workOut:[],
             madeForYou:[],
              
             artists:[],
              
             nowPlaying:{
                 id:-1
             }, 
            images:[
                "https://66.media.tumblr.com/118aca193c3abc8b625e63c5f0335425/tumblr_p60vgeImzN1s9h9x0o1_1280.png",
                "https://images.8tracks.com/cover/i/000/732/680/tumblr_mtj0z0kWxu1sgs6sho1_500-6691.jpg?rect=0,0,500,500&q=98&fm=jpg&fit=max",
                "https://pro2-bar-s3-cdn-cf6.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/08196ebf3a4ad86ddbd1057860ae28c9caae76ca0f80fb65e035d8696cc58e354b3de0fde9bbfb6b_rw_1200.jpg?h=5e43ffa86778caa3e87507b8eb4338fd",
                "https://pro2-bar-s3-cdn-cf6.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/7238d42acc58c1c5f58e6ca6768bfb2352a0aa7a21016eb7d6f0dc293190f898f05ee0a79aeb4322_rw_1200.jpg?h=d73e87a9258dd65515c8148ff3930b6c",
                "https://pro2-bar-s3-cdn-cf1.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/9ce10e53483877713970c011832104bc5612cebc490e0ff02b7ba61f29e6a8b634f6b5d6c1cf2517_rw_1200.jpg?h=10e5644df70a47650673d7dfd8eddc46",
                "https://pro2-bar-s3-cdn-cf4.myportfolio.com/1fabf4ed77f805d754b14c5b7b6b7fb1/fe9e53fcbc1999b137df87ecc3f787cea681b2fe0ac3efc24a60b5cb380f4d8fc3ec97d47153d524_rw_1200.jpg?h=39b9900876a6fad4d67f77832f312591",
                "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/113280551/original/a0e95a7b71c3dee71cb7ba3d381171e86f466d7e/do-cover-art-for-your-next-single-or-spotify-playlist.jpg",
                "https://cdn.dribbble.com/users/278624/screenshots/4413242/playlist_cover2.png",
                "https://colleenplays.files.wordpress.com/2019/10/colleen-a-flame-variations-artwork-by-iker-spozio.jpg?w=602&h=602",
                "https://colleenplays.files.wordpress.com/2011/07/colleen-captain-of-none-artwork-by-iker-spozio.jpg?w=600&h=600",
                "https://colleenplays.files.wordpress.com/2013/09/colleen-solar-stellar-by-iker-spozio.jpg?w=600&h=600"                
            ]      
         }
         this.togglePlayPause=this.togglePlayPause.bind(this)
 
     }
    componentDidMount() {

        window.addEventListener('contextmenu',(event) =>{
            event.preventDefault() })

        axios.get("http://spotify.mocklab.io"+"/browse/categories", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 2
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        catagories: res.data.data.categories.map( category => ({
                            id: category._id,
                            name:category.name,
                        })
                        )
                    })
                    console.log(this.state.catagories)
                    axios.get("http://spotify.mocklab.io"+"/browse/categories/"+this.state.catagories[0].id+"/playlists", {
                        headers: {
                            'authorization': "Bearer "+localStorage.getItem("token"),
                            //category id as path??
                        },
                        params: {
                            limit: 9
                        }
                    })
                    .then(res => {
                        if(res.status === 200)
                        {
                            this.setState({
                                firstCategory: res.data.data.playlists.map( playList => ({
                                    id:playList._id,
                                    title:playList.name,
                                    description: playList.description,
                                    imageUrl:playList.images[0]
                                })),
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
                    axios.get("http://spotify.mocklab.io"+"/browse/categories/"+this.state.catagories[1].id+"/playlists", {
                        headers: {
                            'authorization': "Bearer "+localStorage.getItem("token"),
                            //category id as path??
                        },
                        params: {
                            limit: 9
                        }
                    })
                    .then(res => {
                        if(res.status === 200)
                        {
                            this.setState({
                                secondCategory: res.data.data.playlists.map( playList => ({
                                    id:playList._id,
                                    title:playList.name,
                                    description: playList.description,
                                    imageUrl:playList.images[0]
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
                else if(res.data.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
            })

         //artists   
         axios.get("http://spotify.mocklab.io"+"/artists", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            }
            /*params: {
                limit: 9 //3wzen n3rf btrg3 kam artist
            }*/
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

        //recently played
        axios.get("http://spotify.mocklab.io"+"/me/player/recentlyPlayed", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        recentlyPlayed: res.data.data.items.map( playList => ({
                            id:playList._id,
                            title:playList.context.name,
                            imageUrl:playList.context.image,
                        })
                        )
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

        //popular albums
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

        //most recent albums
        axios.get("http://spotify.mocklab.io"+"/albums/top",{
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
                        mostRecentAlbums: res.data.data.albums.map( album => ({
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

        //popular playlists
        axios.get("http://spotify.mocklab.io"+"/playlists/top", {
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
                        popularPlayLists: res.data.data.playlist.map( playList => ({
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

        //most recent playlists
        axios.get("http://spotify.mocklab.io"+"/playlists/top", {
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9,
                sort: "-releaseDate"
            }
        })
            .then(res => {
                console.log(res);
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
        {document.title ="Spotify - Home"}
    return(
        
        <div id='webplayer-layout'className="container webplayer col-12">
            <HomePageNavbar/>
        <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/></head>
        <div className="row webplayer-body m-0">
        
            <div className="col-lg-10 webplayer-body-and-navbar colums-no-padding">
                {/*<HomeNavBar/>*/}
                <div id="webplayer-home">
            <div className="made-for-you-section">
                <h2 className="section-title made-for-you">Most Recent Playlists</h2>
                <div className="card-group">
                    {this.state.mostRecentPlayLists.map( (playList,index) => (
                        <div>
                                <div className="card" id={playList.id}>

                                    <img src={this.state.images[index]} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playList.title}</h5>
                                        <p className="card-text">{playList.description}</p>
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
            <div className="popular-playlists-section">
                <h2 className="section-title popular-playlists">Popular Playlists</h2>
                <div className="card-group">
                    {this.state.popularPlayLists.map( (playList,index) => (
                        <div>
                            <div className="card" id={playList.id}>
                               
                                <img src={this.state.images[index+2]} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playList.title}</h5>
                                        <p className="card-text">{playList.description}</p>
                                        <div id={playList._id}>
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
            <div className="workout-playlists-section">
                <h2 className="section-title workout-playlists">Most recent Albums</h2>
                <div className="card-group">
                    {this.state.mostRecentAlbums.map( (album,index) => (
                        <div>
                            <div className="card" id={album.id}>
                              
                                    <img src={this.state.images[index+5]} className="card-img-top" alt="..."></img>
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
            <div className="popular-albums-section">
                <h2 className="section-title popular-albums">Popular Albums</h2>
                <div className="card-group">
                    {this.state.popularAlbums.map( (album,index) => (
                        <div>
                                <div className="card" id={album.id}>
                                    <img src={this.state.images[index]} className="card-img-top" alt="..."></img>
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
            <div className="popular-albums-section">
                            {this.state.catagories.slice(0,1).map( category => (
                                <h2 className="section-title popular-albums">
                                    {category.name}
                                </h2>  
                            ))}
                <div className="card-group">
                    {this.state.firstCategory.map( (playlist,index) => (
                        <div>
                                <div className="card" id={playlist.id}>
                         <img src={this.state.images[index+3]}className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playlist.title}</h5>
                                        <p className="card-text">{playlist.description}</p>
                                        <div id={playlist.id}>
                                            <button id={playlist.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-play"></i></button>
                                            <button id={playlist.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div> 
                                </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="popular-albums-section">
            {this.state.catagories.slice(1,2).map( category => (
                                <h2 className="section-title popular-albums">
                                    {category.name}
                                </h2>  
                            ))}
                <div className="card-group">
                    {this.state.secondCategory.map( (playlist,index) => (
                        <div>
                                <div className="card" id={playlist.id}>
                            <img src={this.state.images[index+6]} className="card-img-top" alt="..."></img>
                                    <div className="card-body">
                                        <h5 className="card-title">{playlist.title}</h5>
                                        <p className="card-text">{playlist.description}</p>
                                        <div id={playlist.id}>
                                            <button id={playlist.id} className="btn btn-primary play-btn active-play" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-play"></i></button>
                                            <button id={playlist.id} className="btn btn-primary pause-btn" onClick={()=> this.togglePlayPause(playlist.id)}><i className="fa fa-pause"></i></button>
                                        </div>    
                                    </div> 
                                </div>
                        </div>
                    )
                    )}
                </div>
            </div>
            <div className="popular-artists-section">
                <h2 className="section-title popular-artists">Popular Artists</h2>
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
            </div>
        </div>
        <div className="row">
            <div className="col-12 colums-no-padding">
                {/*<ProgressBar/>*/}
            </div>
        </div>
        
    </div>
)
                    }
}
export default Home;