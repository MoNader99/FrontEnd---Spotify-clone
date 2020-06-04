import React, { Component } from "react";
import Loader from 'react-loader-spinner'
import AddToPlaylist from '../PlaylistsComponent/AddToPlaylist';
import "./Search.css";
import {connect} from 'react-redux';
import * as actionTypes from "../../Store/actions";
import {BASEURL} from '../../Constants/BaseURL'
import {NavLink, Link} from "react-router-dom";

class Search extends Component {
    constructor( props ) {
		super( props );

		this.state = {
            searchedText:'',
            results: {},
            loading: false,
            display:true,
            playlists: [
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
            ],
            geners:[
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Release", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
            ],
            SongInfo:[],
            SongsTargets:[],
            playlistTargets:[],
            usersTargets:[],
            artistTargets:[],
            albumTargets:[],
		};
    }

    componentDidMount(){
        var url = BASEURL + "/get-tracks"; 
  
                const requestOptions = {
                  method: 'GET',
                };
                fetch(url,requestOptions)
                  .then((response) => { return response.json()})
                  .then((data) => {
                    this.setState({ 
                      SongInfo:data.tracks,
                    });
                  })
                  .catch((error)=>{console.log(error);
        })

        url=BASEURL + "/get-playlists"
        fetch(url,requestOptions)
                  .then((response) => { return response.json()})
                  .then((data) => {
                    this.setState({ 
                      playlistTargets:data.playlists,
                    });
                  })
                  .catch((error)=>{console.log(error);
        })

        url = BASEURL+ "/get-users-login"; 
          fetch(url,requestOptions)
            .then((response) => { return response.json()})
            .then((data) => {
              this.setState({ 
                usersTargets:data.users,
              });
            })
            .catch((error)=>{console.log(error);
        })
        url=BASEURL+ "/get-albums"
        fetch(url,requestOptions)
            .then((response) => { return response.json()})
            .then((data) => {
              this.setState({ 
                albumTargets:data.albums,
              });
            })
            .catch((error)=>{console.log(error);
        })
        url=BASEURL + "/get-artists"
        fetch(url,requestOptions)
            .then((response) => { return response.json()})
            .then((data) => {
              this.setState({ 
                artistTargets:data.artists,
              });
            })
            .catch((error)=>{console.log(error);
        })
    }

    handleOnInputChange = (event) => {
        const Text = event.target.value;
        setTimeout(() => {
            if(Text!=""){
                var songs=this.state.SongInfo.sort(() => Math.random() - Math.random()).slice(0, 3)
                this.setState({
                    searchedText:Text, display:false,
                    SongsTargets:songs
                })  
            }
            else{
                this.setState({searchedText:Text, display:true})
            } 
            this.setState({loading:true})
        }, 500);
        this.setState({loading:false})
    };

  render(){
      var playlistshit=this.state.playlistTargets.sort(() => Math.random() - Math.random()).slice(0, 3)
		return(
        <div className="Search">
            <nav class="navbar mb-4 ">
            
                <div className="d-flex">
                <div className="collapse-drop">
                <div className="Collapse-drop-down">
                  <div className="home-drop">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <Link className="no-underline" to="/webplayer/home/"><a class="dropdown-item" href="#"><i className="fas fa-home"></i> Home</a></Link>
                          <Link to="/webplayer/search/"><a class="dropdown-item" href="#"><i className="fas fa-search" aria-hidden="true"></i> Search</a></Link>
                          <NavLink to="/webplayer/yourlibrary/"><a class="dropdown-item" href="#"><i className="fas fa-bookmark" aria-hidden="true"></i> Your library</a></NavLink>
                          <Link to="#"><a data-toggle="modal" data-target="#create-new-playist" class="dropdown-item" href="#"><i className="fas fa-plus-square" aria-hidden="true"></i> Create playlist</a></Link>
                          <Link to="/webplayer/likedsongs"><a class="dropdown-item" href="#"><i className="fas fa-heart " aria-hidden="true"></i> Liked songs</a></Link>
                          <Link to="/premium"><a class="dropdown-item" href="#">  <i class="fa fa-usd" aria-hidden="true"></i>  Upgrade</a></Link>

                          </div>
                    </div>        
                  </div>
                </div>
                    <div className="Search-content">
                        <span className="search-search-icon" ><i className="fas fa-search"></i></span>
                        <input onChange={this.handleOnInputChange} autocomplete="off" name="search" className="Search-bar form-control" placeholder="Search for Artists, Songs, or products" aria-label="Search" ></input>
                    </div>
                </div>
                
                { this.props.logged==false ?
                <div>
                    <a href="/signup" className="signup btn rounded-pill text-center">SIGN UP</a>
                    <a href="/login" className="login btn btn-light rounded-pill text-center">LOG IN</a>
                </div>
                :
                <div>
                    <div id="profile">
                     <a className="nav-link dropdown-toggle" href="/account" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="user-img" alt="." src={this.props.image} />
                         Profile
                        </a>
                    
                        <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbar-dropdown">
                            <a className="dropdown-item drop-class" href="/account-overview">Account</a>
                            <a onClick={this.props.onSignOut} className="dropdown-item drop-class" href="/">Sign out</a>
                        </div>
                    </div>
                </div>
                }
            </nav>


            {this.state.display == true ?
            <div className="display-true">
                <div className="component-content ">
                        <p className=" browse">Your Top Geners</p>
                        <div className="row">
                            { this.state.geners.map((Card,index)=>(
                                <div className="col-xl-3 col-lg-5 col-md-6" key={index}>
                                <a href="/webplayer/playlist" class="top-geners" style={Card.style} >
                                    <h3 class="head-style">{Card.Card_name}</h3>
                                    <img src={Card.image_URL} class="img-style" alt=""></img>
                                </a>
                                </div>
                            ))}
                        </div>     
                </div>
                <div className="component-content ">
                    <h2 className=" browse" >Browse All</h2>
                        <div className="row">
                            { this.state.playlists.map((Card,index)=>(
                                <div className="col-xs-6" key={index}>
                                <a href="/webplayer/playlist" class="BrowseItem" style={Card.style}>
                                    <h3 class="head-style">{Card.Card_name}</h3>
                                    <img src={Card.image_URL} class="img-style" alt=""></img>
                                </a>
                                </div>
                            ))}
                        </div>     
                </div>
            </div>
            :

            <div className="display-false">
                {/* <Loader type="Circles" color="#00BFFF" height={200} width={200} timeout={490} /> */}
                <div>
                    <div className="component-content ">
                            <p className=" browse">Top results</p>
                            <div className="row">
                            <div className="col-xl-3 p-0">
                                <div class="top-result-card">
                                    <img src={playlistshit[0].playlistImg} className="image d-flex align-items-start" ></img>
                                   <h3 className="text-white d-flex align-items-start mt-3 font-weight-bold">{playlistshit[0].playlistName}</h3>
                                    <div>
                                        <p className="text-white d-flex align-items-start mt-1 font-weight-bold">By {playlistshit[0].creatorName}</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-xl-9 ">

                            {this.state.SongsTargets.map((song,index)=>(
                            <div className="songs">
                                <div className="row">
                                <div style={{padding: "0"}} className="col-xl-1 col-md-1 col-1 col-2">
                                    <a>
                                        <img src={song.imgURL} className="p-1 image"></img>
                                    </a>
                                </div>
                                <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
                                <ul className="list-unstyled ">
                                    <li className="d-flex align-items-start">{song.SongName}</li>
                                    <li className="song-info"><a href='/webplayer/artistprofile/'>{song.Artist}</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'>{song.AlbumName}</a></li>
                                </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-4 d-flex justify-content-end">
                                    <div className="dropdown d-flex align-items-center ">
                                    <a className="song-menu Menu mt-4" href="/account" id="Dropdown" data-toggle="dropdown"> ••• </a>
                                    <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                                        <a className="dropdown-item drop-class" id="ADD" value="ShowAdd" onClick={this.show}>Add to your liked songs</a>
                                        <a className="dropdown-item drop-class" data-toggle="modal" data-target="#add-to-playlist" href="#">Add to playlist</a>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            ))}
                            </div>
                            </div>     
                    </div>


                    <div className="component-content ">
                        <h2 className=" browse" >Artists</h2>
                            <div className="row">
                            {this.state.artistTargets.map((artist,index)=>(
                            <div className="col-xl-1 col-lg-3 col-md-2 col-sm-1 col-1 mt-3 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"> <img src={artist.artistImg} class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">{artist.artistName}</h3>
                                    <h5 className=" text-white d-flex align-items-start" >Artist</h5>
                                </a>
                            </div>
                            ))}
                            </div>     
                    </div>


                    <div className="component-content ">
                        <h2 className=" browse" >Albums</h2>
                            <div className="row">
                            {this.state.albumTargets.map((album,index)=>(
                            <div className="col-xl-1 col-lg-3 col-md-2 col-sm-1 col-1 mt-3 artist-card ">
                                <a href="/webplayer/album" class="albums-playlists-card"  >
                                    <img src={album.albumImg} class="img-style" alt=""></img>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">{album.albumName}</h3>
                                    <h5 className=" text-white d-flex align-items-start" >{album.Artist}</h5>
                                </a>
                            </div> 
                            ))}                          
                            </div>     
                    </div>


                    <div className="component-content ">
                        <h2 className=" browse" >playlists</h2>
                            <div className="row">
                            {this.state.playlistTargets.map((playlist,index)=>(
                            <div className="col-xl-1 col-lg-3 col-md-2 col-sm-1 col-1 mt-3 artist-card ">
                                <a href="/webplayer/playlist" class="albums-playlists-card"  >
                                    <img src={playlist.playlistImg} class="img-style" alt=""></img>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">{playlist.playlistName}</h3>
                                    <h5 className=" text-white d-flex align-items-start" >By {playlist.creatorName}</h5>
                                </a>
                            </div>
                            ))}
                            </div>     
                    </div>


                    <div className="component-content ">
                        <h2 className=" browse" >Profiles</h2>
                            <div className="row">
                            {this.state.usersTargets.map((user,index)=>(
                            <div className="col-xl-1 col-lg-3 col-md-2 col-sm-1 col-1 mt-3 artist-card ">
                                <a href="/webplayer/userprofile" class="artist-card"  >
                                    <div className="image-padding"><img src={user.ImgUrl} class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">{user.Username}</h3>
                                </a>
                            </div>
                            ))}        
                        <AddToPlaylist/>

                            </div>     
                    </div>
                </div>
            </div>
            }
            
        </div>
		)	
    }
}
const mapStateToProps = state =>{
    return{
      logged: state.loggenIn,
      image: state.user.ImgUrl,

    };
  };
const mapDispatchToProps = dispatch => {
    return {
      onSignOut : () => dispatch ({type: actionTypes.ON_SIGNOUT}),
    };
  };
export default connect(mapStateToProps,mapDispatchToProps) (Search);
