import React, { Component } from 'react';
import "./ArtistOverview.css";
import  HomePageNavbar  from '../HomePage/HomePageNavbar';
import {BASEURL} from '../../Constants/BaseURL'

/** Class ArtistOverview 
 * @category ArtistOverview
 * @extends Component
 */
class ArtistOverview extends Component {
  constructor(props){
    super(props);
    this.state = 
    {
        /**username in Artist Profile
        * @memberof ArtistOverview
        * @type {string}
        */
        username:"Massar Egbari",

        /**Number of playlists that the user create
        * @memberof ArtistOverview
        * @type {number}
        */
        playlists:15,
        songsNumber:3,
        /**Text on follow button
        * @memberof ArtistOverview
        * @type {string}
        */
        ButtonText:"Follow",

        /**Array of playlists
        * @memberof ArtistOverview
        * @type {Array<playlists>}
        */
        playlistTargets:[]
    }
  }

  /**Function to Handle follow button
   * @memberof ArtistOverview
   * @func FollowButton
   */
  FollowButton = () => {
   if ( this.state.ButtonText === "Follow" ) {
    var url =  BASEURL+"/user/follow";    
    const requestOptions = {
      method: 'POST', 
      headers: {'Content-Type': 'application/json' }, 
      body: JSON.stringify({
         playlistName: this.state.userid
        }) ,
  
    };    
       fetch(url,requestOptions)
        .then((res) => {
          if(res.status===200){
            console.log("response is ok")
            this.setState({ButtonText: "UnFollow"});
          }
     })
        .then((data) =>{})
        .catch((err)=>console.log(err))
   }
   else if ( this.state.ButtonText === "UnFollow" ) {
    var url =  BASEURL+"/user/unfollow";    
    const requestOptions = {
      method: 'POST', 
      headers: {'Content-Type': 'application/json' }, 
      body: JSON.stringify({
         playlistName: this.state.userid
        }) ,
  
    };    
       fetch(url,requestOptions)
        .then((res) => {
          if(res.status===200){
            console.log("response is ok")
            this.setState({ButtonText: "Follow"});
          }
     })
        .then((data) =>{})
        .catch((err)=>console.log(err))
   }
 }


 
  
     
  

 /**Function that is called when the component renders
   * @memberof ArtistOverview
   * @func componentDidMount
   */
 componentDidMount(){
    const url=BASEURL + "/artistoverview"
    const requestOptions = {
        method: 'GET',
      };
       /**Function that is fetches the artist data
   * @memberof ArtistOverview
   * @func fetch
   */
    fetch(url,requestOptions)
              .then((response) => { return response.json()})
              .then((data) => {
                this.setState({ 
                  playlistTargets:data.Artist,
                  songsNumber:data.Artist.length
                });
              })
              .catch((error)=>{console.log(error);
    })
 }
  render(){
    const Card = () => {
        
        const datas = this.state.playlistTargets.slice(0,1).map((user,i)=>{ 
          return <ul className="list-unstyled list">
                    <li className="profile">Artist</li>
                    <li className="username">{this.state.playlistTargets[i].Artist}</li>
                    <li className="playlists">{this.state.songsNumber} Songs</li>
                </ul>})
       return (
           <div>
               {datas}
           </div>
       )
      }
    return (
        <div>
            <HomePageNavbar/>
        <div className="user ">
          <div className="artist-profile row">
           
            <div className="col-xl-10 col-lg-12 d-flex align-items-center">
                <Card></Card>
            </div>
            <div className="col-xl-2 col-lg-12 d-flex align-items-center justify-content-center">
            <button onClick={this.FollowButton} className="follow btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold">{this.state.ButtonText}</button>
            </div>
          </div>
        
          <div className="public row pl-5">
            <h3>Popular</h3>
          </div>

          <div className=" mt-3 pl-5">
          { this.state.playlistTargets.map((Card,index)=>(
            <div className="song">
            
                <div className="row">
               <div className="col-xl-1 col-md-1 col-1 col-2">
                <div className="music-sign mt-2 mx-4 "> </div>
               </div>
               <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
               <img alt="jkl" src={Card.icon} className="cover"></img>
               <ul className="list-unstyled">
               
                   <li className="d-flex align-items-start">{Card.SongName}</li>
                   <li className="song-info"><a href='/webplayer/artistprofile/'>{Card.Artist} </a>  </li>
                </ul>
               </div>
                    
                    
               <div className="col-xl-1 col-md-2 col-sm-2 col-2">
                 <div className="d-flex align-items-center duration mt-4">{Card.Duaration}</div>
               </div>
                </div> 
                
            </div>
           
            
          ))}
          </div>
          </div>
        </div> 
    );
  }
}
export default ArtistOverview;