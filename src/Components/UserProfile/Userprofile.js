import React, { Component } from 'react';
import "./Userprofile.css";
import { HomePageNavbar } from '../HomePage/HomePageNavbar';
import {BASEURL} from '../../Constants/BaseURL'

class Userprofile extends Component {
  constructor(props){
    super(props);
    this.state = 
    {
        username:"Mohammed_Nader",
        playlists:15,
        ButtonText:"Follow",
        playlistTargets:[]
    }
  }
  FollowButton = () => {
   if ( this.state.ButtonText === "Follow" ) {
     this.setState({ButtonText: "UnFollow"});
   }
   else if ( this.state.ButtonText === "UnFollow" ) {
     this.setState({ButtonText: "Follow"});
   }
 }
 Like = e => {
    const {id} = e.target;
    var heart=document.getElementById(id);
    heart.classList.toggle("far");
    heart.classList.toggle("fas");
    heart.classList.toggle("red");
 }

 componentDidMount(){
    const url=BASEURL + "/get-playlists"
    const requestOptions = {
        method: 'GET',
      };
    fetch(url,requestOptions)
              .then((response) => { return response.json()})
              .then((data) => {
                this.setState({ 
                  playlistTargets:data.playlists,
                });
              })
              .catch((error)=>{console.log(error);
    })
 }
  render(){
    return (
        <div className="user">
          <div className="user-profile row">
            <div className="col-2">
                <img className="user-image" src="https://lh3.googleusercontent.com/proxy/YpDlkQvZglL3Na-bCuo9fNsR5r1HgFKie4ScZgnCnJIoJswU1kCmmXngcsubki5UFGxED6TDqOVhAqFNGkc3WrlaSmlPi22LAUC_UCRTIjdTGg" />
            </div>
            <div className="col-8 d-flex align-items-center">
                <ul className="list-unstyled">
                    <li className="profile">PROFILE</li>
                    <li className="username">{this.state.username}</li>
                    <li className="playlists">{this.state.playlists} Playlist</li>
                </ul>
            </div>
            <div className="col-2 d-flex align-items-center">
            <button onClick={this.FollowButton} className="btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold">{this.state.ButtonText}</button>
            </div>
          </div>

          <div className="row mt-4 pl-5">
            <h3>Public Playlists</h3>
          </div>

          <div className="row mt-3 pl-5">
          { this.state.playlistTargets.map((Card,index)=>(
            <div className="card">
                <a href="/webplayer/playlist"><img src={Card.playlistImg} className="card-img-top" alt="..."></img></a>
                <div className="card-body" id="playlists-cards">
                    <h5 className="card-title">{Card.playlistName}</h5>
                    <p className="card-text">{this.state.username}</p>
                    
                    <button id={index} onClick={this.Like} className="play-btn far fa-heart"></button>
                    
                </div> 
            </div>
          ))}
          </div>

        </div> 
    );
  }
}
export default Userprofile;