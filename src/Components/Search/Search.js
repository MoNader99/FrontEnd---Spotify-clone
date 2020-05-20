import React, { Component } from "react";
import Loader from 'react-loader-spinner'
import "./Search.css";

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
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
            ],
            geners:[
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
                {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
                {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
                {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},               
            ]
		};
    }

    handleOnInputChange = (event) => {
        const Text = event.target.value;
        
        setTimeout(() => {
            if(Text!=""){
                this.setState({searchedText:Text, display:false})  
            }
            else{
                this.setState({searchedText:Text, display:true})
            } 
            this.setState({loading:true})
        }, 500);
        this.setState({loading:false})
    };

  render(){
		return(
        <div className="Search">
            <nav class="navbar mb-4 ">
            
                <div className="d-flex">
                    <a className="previous" href="#" > &#60; </a>
                    <a className="next" href="#"> &#62; </a>
                    <div className="Search-content">
                        <span className="search-search-icon" ><i className="fas fa-search"></i></span>
                        <input onChange={this.handleOnInputChange} autocomplete="off" name="search" className="Search-bar form-control" placeholder="Search for Artists, Songs, or products" aria-label="Search" ></input>
                    </div>
                </div>
                
                <div>
                    <a className="signup btn rounded-pill text-center">SIGN UP</a>
                    <a className="login btn btn-light rounded-pill text-center">LOG IN</a>
                </div>
            </nav>


            {this.state.display == true ?
            <div>
                <div className="component-content ">
                        <p className=" browse">Your Top Geners</p>
                        <div className="row">
                            { this.state.geners.map((Card,index)=>(
                                <div className="col-xl-3 col-lg-4" key={index}>
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
                        <div>
                            { this.state.playlists.map((Card,index)=>(
                                <a href="/webplayer/playlist" class="BrowseItem" style={Card.style} key={index}>
                                    <h3 class="head-style">{Card.Card_name}</h3>
                                    <img src={Card.image_URL} class="img-style" alt=""></img>
                                </a>
                            ))}
                        </div>     
                </div>
            </div>
            :
            <div>
                {/* <Loader type="Circles" color="#00BFFF" height={200} width={200} timeout={490} /> */}
                <div>
                    <div className="component-content ">
                            <p className=" browse">Top results</p>
                            <div className="row">
                            <div className="col-3 p-0">
                                <div class="top-result-card">
                                    <img src="https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" className="image d-flex align-items-start" ></img>
                                    <h3 className="text-white d-flex align-items-start mt-3 font-weight-bold">Playlist Name</h3>
                                    <div>
                                        <p className="text-white d-flex align-items-start mt-1 font-weight-bold">By User Name</p>
                                    </div>
                                </div>

                            </div>
                            <div className="col-9 ">
                            <div className="songs">
                                <div className="row">
                                <div className="col-xl-1 col-md-1 col-1 col-2">
                                    <a>
                                        <img src='https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format' className="p-1 image"></img>
                                    </a>
                                </div>
                                <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
                                <ul className="list-unstyled ">
                                    <li className="d-flex align-items-start">Song name</li>
                                    <li className="song-info"><a href='/webplayer/artistprofile/'>Artist Name</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'> Album Name </a></li>
                                </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-4 d-flex justify-content-end">
                                    
                                </div>
                                </div>
                            </div>
                            <div className="songs">
                                <div className="row">
                                <div className="col-xl-1 col-md-1 col-1 col-2">
                                    <a>
                                        <img src='https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format' className="p-1 image"></img>
                                    </a>
                                </div>
                                <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
                                <ul className="list-unstyled ">
                                    <li className="d-flex align-items-start">Song name</li>
                                    <li className="song-info"><a href='/webplayer/artistprofile/'>Artist Name</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'> Album Name </a></li>
                                </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-4 d-flex justify-content-end">
                                    
                                </div>
                                </div>
                            </div>
                            <div className="songs">
                                <div className="row">
                                <div className="col-xl-1 col-md-1 col-1 col-2">
                                    <a>
                                        <img src='https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format' className="p-1 image"></img>
                                    </a>
                                </div>
                                <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
                                <ul className="list-unstyled ">
                                    <li className="d-flex align-items-start">Song name</li>
                                    <li className="song-info"><a href='/webplayer/artistprofile/'>Artist Name</a> <span className="font-weight-bold">.</span> <a href='/webplayer/album'> Album Name </a></li>
                                </ul>
                                </div>
                                <div className="col-xl-2 col-md-4 col-sm-4 col-4 d-flex justify-content-end">
                                    
                                </div>
                                </div>
                            </div>
                            </div>
                            </div>     
                    </div>


                    <div className="component-content ">
                        <h2 className=" browse" >Artists</h2>
                            <div className="row">
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"> <img src="https://vanyaland.com/wp-content/uploads/2017/07/KendrickLamar_PublicityImage.jpg" class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">Artist Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >artist</h5>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"><img src="https://www.grammy.com/sites/com/files/styles/news_detail_header/public/katy_perry_020419.jpg?itok=1eyJ68SB" class="img-style" alt=""></img> </div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">Artist Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >artist</h5>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"> <img src="https://etbilarabi.com/sites/default/files/styles/article_landing/public/2020-03/BAFBDC61-35D2-4A4E-A9F6-4C41F1B47403.jpeg?itok=zNDV0gxy" class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">Artist Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >artist</h5>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"><img src="https://www.nme.com/wp-content/uploads/2017/05/lana_del_rey_new_song_coachella_2017_1000-696x442.jpg" class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">Artist Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >artist</h5>
                                </a>
                            </div>
                            </div>     
                    </div>


                    <div className="component-content ">
                        <h2 className=" browse" >Albums</h2>
                            <div className="row">
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="albums-playlists-card"  >
                                    <img src="https://pro2-bar-s3-cdn-cf6.myportfolio.com/0d5a2028d7a7f8febf676a97648ea300/05851b218f8801ca2b106119_rw_1920.jpg?h=3e70946439d6e6326c1bd3efc5d20e51" class="img-style" alt=""></img>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">Album Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >artist name</h5>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="albums-playlists-card"  >
                                    <img src="https://stcmlbpp1316.files.wordpress.com/2016/09/computergraphics-album-covers-2014-15.jpg" class="img-style" alt=""></img>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">Album Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >artist name</h5>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="albums-playlists-card"  >
                                    <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/12/attachment_68585523.jpg?auto=format&q=60&fit=max&w=930" class="img-style" alt=""></img>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">Album Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >artist name</h5>
                                </a>
                            </div>
                            </div>     
                    </div>


                    <div className="component-content ">
                        <h2 className=" browse" >playlists</h2>
                            <div className="row">
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="albums-playlists-card"  >
                                    <img src="https://i.ibb.co/MDQvq27/Empty-playlist.jpg" class="img-style" alt=""></img>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">playlist Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >By user name</h5>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="albums-playlists-card"  >
                                    <img src="https://i.ibb.co/MDQvq27/Empty-playlist.jpg" class="img-style" alt=""></img>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">playlist Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >By user name</h5>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="albums-playlists-card"  >
                                    <img src="https://i.ibb.co/MDQvq27/Empty-playlist.jpg" class="img-style" alt=""></img>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">playlist Name</h3>
                                    <h5 className=" text-white d-flex align-items-start" >By user name</h5>
                                </a>
                            </div>
                            </div>     
                    </div>


                    <div className="component-content ">
                        <h2 className=" browse" >Profiles</h2>
                            <div className="row">
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"><img src="https://res.cloudinary.com/dtbudl0yx/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png" class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">User Name</h3>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"><img src="https://res.cloudinary.com/dtbudl0yx/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png" class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">User Name</h3>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"><img src="https://res.cloudinary.com/dtbudl0yx/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png" class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">User Name</h3>
                                </a>
                            </div>
                            <div className="col-xl-1 artist-card ">
                                <a href="/webplayer/playlist" class="artist-card"  >
                                    <div className="image-padding"><img src="https://res.cloudinary.com/dtbudl0yx/image/fetch/w_2000,f_auto,q_auto,c_fit/https://adamtheautomator.com/content/images/size/w2000/2019/10/user-1633249_1280.png" class="img-style" alt=""></img></div>
                                    <h3 class="artist-info-style text-white d-flex align-items-start mt-3 ">User Name</h3>
                                </a>
                            </div>
                            </div>     
                    </div>
                </div>
            </div>
            }
            
        </div>
		)	
    }
}
export default Search