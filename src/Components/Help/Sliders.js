import React, { Component } from "react"
import "./Sliders.css"
import Carousel from 'react-bootstrap/Carousel'
import whitebackground from "../whitebackground.jpg";
import 'bootstrap/dist/css/bootstrap.min.css'
import CreatePlaylist from '../Components/CreatePlaylist'


var elements;
var checkvisible;


class Sliders extends Component {

    handelindexchange =(event)=>{

        checkvisible=document.querySelectorAll(".slide-cars-title");
        
        var j;
        for(var i=0;i<checkvisible.length;i++)
        { 
            if(checkvisible[i].offsetWidth > 0 &&checkvisible[i].offsetHeight > 0)
            j=i;
        }

        elements = document.querySelectorAll(".slide");
        for(var i=0;i<elements.length;i++){
            if(i==j) 
            {
                elements[i].className="slide active";
            }
            
            else
            {
                if(elements[i].className=="slide active")
                elements[i].className="slide";
            }
            
        }
     }
    render(){
return(
    
    <div className="container mt-4" id="cont">
    
    <div className="carousel-exist">
                 <div className="container">
                    <div className="row">
                        <div className="col-md-6 hidden-xs hidden-sm carousel-iphones">
                            <div className="iphone-device">
                                <div className="iphone-screen">
                                <img src="https://support.scdn.co/static/img/videos/video-offline.jpg" className="slide active"/>
                                <img src="https://support.scdn.co/static/img/videos/video-connect.jpg" className="slide"/>
                                <img src="https://support.scdn.co/static/img/videos/video-chromecast.jpg" className="slide"/>
                                <img src="https://support.scdn.co/static/img/videos/video-playlist.jpg" className="slide"/>
                                <img src="https://support.scdn.co/static/img/videos/video-search.jpg" className="slide"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6   video-info-container container">
                             
                        <Carousel controls={true} indicators={true} onSlideEnd={(event)=>this.handelindexchange(event)}>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={whitebackground}
                                alt="First slide"
                                />
                                <Carousel.Caption> <div className="text container">
                                <h3 className="slide-cars-title">Listen Offline</h3>
                                <p >How to take your music with you in the car, on the plane, or wherever you may not be able to access the internet</p>
                                <a className="btn js-ga-event" href="https://player.vimeo.com/video/143256102" data-open="modal" data-vimeo-id="143256102" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Spotify on Chromecast">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fill-rule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                        </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={whitebackground}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <div className="text container">
                                <h3 className="slide-cars-title">Spotify Connect</h3>
                                <p>Play Spotify on your speaker, sound system, or TV with Spotify Connect. Here's how!</p>
                                <a className="btn js-ga-event" href="https://player.vimeo.com/video/143256102" data-open="modal" data-vimeo-id="143256102" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Spotify on Chromecast">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fill-rule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                        </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 h-100"
                                src={whitebackground}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <div className="text container">
                                <h3 className="slide-cars-title">Spotify on Chromecast</h3>
                                <p>Spotify on your Chromecast? You heard us right! Here's how to team them up!</p>
                                <a className="btn js-ga-event" href="https://player.vimeo.com/video/143256102" data-open="modal" data-vimeo-id="143256102" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Spotify on Chromecast">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fill-rule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                        </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={whitebackground}
                                alt="Fourth slide"
                                />

                                <Carousel.Caption>
                                <div className="text container">
                                <h3 className="slide-cars-title">Make a Playlist</h3>
                                <p>Playlists are your personal mixtapes that you can share or collaborate on with friends. Here's how to get started.</p>
                                <a className="btn js-ga-event" href="https://player.vimeo.com/video/143256102" data-open="modal" data-vimeo-id="143256102" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Spotify on Chromecast">
                                  <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fillRule="evenodd"></path></svg>
                                        Watch video
                                        </a>
                                        </div>
                                </Carousel.Caption>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img
                                className="d-block w-100"
                                src={whitebackground}
                                alt="Third slide"
                                />

                                <Carousel.Caption>
                                <div className="text container">
                                <h3 className="slide-cars-title">Search</h3>
                                
                                  <p>Search is the key to Spotify's vast library of music, whether you're looking for a particular artist, album, or song; or if you want Spotify to find music to match a mood, activity, or time of day.</p>
                                  <a className="btn js-ga-event" href="https://player.vimeo.com/video/143256102" data-open="modal" data-vimeo-id="143256102" data-ga-event-category="homepage_video" data-ga-event-action="play_button" data-ga-event-label="Spotify on Chromecast">
                                            <svg width="15" height="15" viewBox="0 0 39 48" xmlns="http://www.w3.org/2000/svg"><path d="M0 3.225V44.72c0 2.57 1.936 3.487 4.302 2.035L37.14 26.61c2.364-1.45 2.364-3.825 0-5.277L4.3 1.19C1.936-.263 0 .653 0 3.224z" fill="#000" fill-rule="evenodd"></path></svg>
                                            Watch video
                                        </a>
                                        </div>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>                            

                        </div>

                    </div>
                </div>
            </div>
             
                        </div>
                        

    );
}
}
export default Sliders;