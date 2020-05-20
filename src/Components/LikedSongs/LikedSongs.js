import React ,{ Component} from 'react';
import './LikedSongs.css';
import ReactSnackBar from "react-js-snackbar";
import CardMedia from '../Media/CardMedia';
import {connect} from 'react-redux';
import AddToPlaylist from '../PlaylistsComponent/AddToPlaylist';
  
class LikedSongs extends Component
{
  state= 
  { 
      SongInfo: [
        {id : 1, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
        {id : 2, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
        {id : 3, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
        {id : 4, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
        {id : 5, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
        {id : 6, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
        {id : 7, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
        {id : 8, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
        {id : 9, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
        {id : 10, SongName : "Born To Die", Singer: "Lana Del Rey", AlbumName: "Born To Die",Duration : "3:52"},
        {id : 11, SongName : "Love", Singer: "Lana Del Rey", AlbumName: "Love",Duration : "4:15"},
        {id : 12, SongName : "Summertime Sadness", Singer: "Lana Del Rey", AlbumName: "Born To Die", Duration : "2:58"},
        
      ],
      LikedSongsImage: "https://uploads-ssl.webflow.com/5e36e6f21212670638c0d63c/5e39d85cee05be53d238681a_likedSongs.png",
      songsNumber: 2,   
      ShowRemove: false,
      ShowingRemove: false,
      playLikedSongs: "Play",
      TracksID: [],
      LikedTracks:[]
  }

  componentDidMount(){
  
    var url = "http://spotify-clone.mocklab.io/get-tracks"; 
  
    const requestOptions = {
      method: 'GET',
    };
    fetch(url,requestOptions)
      .then((response) => { return response.json()})
      .then((data) => {
        // console.log(data)
        this.setState({ 
          SongInfo:data.tracks,
          songsNumber:data.tracks.length
        });
      })
      .catch((error)=>{console.log(error);
  
      })
    }
  
  playButton = e => {
    const {id} = e.target;
    if ( this.state.playLikedSongs === "Play" ) {
      this.setState({playLikedSongs: "Pause"});
    }
    else if ( this.state.playLikedSongs === "Pause" ) {
      this.setState({playLikedSongs: "Play"});
    }
  }
  
show = e => {
  var check = e.target.id;
  if (check=="REMOVE"){
  this.setState({ ShowRemove: true, ShowingRemove: true });
  setTimeout(() => {
    this.setState({ ShowRemove: false, ShowingRemove: false });
  }, 2000); 
  return; 
  }
};


  render(){ 
  return(
    
  <div className="liked-songs-page">
      <div className="content-spacing">
        <div className="row" >
          <div className="col-xs-12  col-lg-5 col-xl-4 d-flex justify-content-center " style={{display:"table"}}>
             <ul className="list-unstyled centered-content">
              <CardMedia image={this.state.LikedSongsImage}/>
					  <li> <h3> Liked Songs </h3> </li>
            <li> <a href="#" onClick={this.playButton} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold"> {this.state.playLikedSongs}</a> </li>
            <li > <div> {this.state.songsNumber} Songs</div> </li>
					</ul>
          </div>

        <div className="col-xs-12  col-lg-7 col-xl-8">


       
                                             {/* Display likd songs */}
           {this.state.songsNumber == 0 ? 

                <div>
                <div className=" d-flex justify-content-center fas fa-headphones mb-3"> </div>
                <h1 className="d-flex justify-content-center font-weight-bolder">Songs you’ve liked live here</h1> 
                <h5 className="d-flex justify-content-center mt-3">Find more of the songs you love in Browse and save to your Liked Songs.</h5>
                <div className="d-flex justify-content-center">
                  <a className=" btn btn-light text-dark rounded-pill text-center px-5 py-2 px-4 mt-3 font-weight-bold " href="/webplayer/HomePage" >Discover</a>
                </div>
                </div>

            : 
          
            
            this.state.SongInfo.map((song,index)=>(
             <div key={index} className="songs">
             <div className="row">
               <div className="col-xl-1 col-md-1 col-1 col-2">
                <div className="music-sign mt-2 mx-4 "> </div>
               </div>
               <div className="col-xl-8 col-md-6 col-sm-6 col-6 mt-3 d-flex align-items-start">
               <ul className="list-unstyled">
                   <li className="d-flex align-items-start">{song.SongName}</li>
                   <li className="song-info"><a href='/webplayer/artistprofile/'>{song.Artist} </a> <span className="font-weight-bold"> . </span> <a href='/webplayer/album'> {song.AlbumName} </a></li>
                </ul>
               </div>
               <div className="col-xl-1 col-md-2 col-sm-2 col-2">
               <div className="dropdown d-flex align-items-center ">
                 <a className="song-menu Menu mt-4" href="/account" id="Dropdown" data-toggle="dropdown"> ••• </a>
                   <div className="dropdown-menu song-dropdown-content dropdown-menu-right ">
                     <a className="dropdown-item drop-class" id="REMOVE" value="ShowRemove" onClick={this.show}>Remove from your liked songs</a>
                     <a className="dropdown-item drop-class" data-toggle="modal" data-target="#add-to-playlist" href="#">Add to playlist</a>
                   </div>
                 </div>
               </div>
               <div className="col-xl-1 col-md-2 col-sm-2 col-2">
                 <div className="d-flex align-items-center duration mt-4">{song.Duration}</div>
               </div>
             </div>
           </div>
            ))} 

                      
      
    <ReactSnackBar Icon={<span className="fab fa-spotify"></span>} Show={this.state.ShowRemove}>
                      Removed From Your Liked Songs
    </ReactSnackBar>
      </div> 
      </div>
      </div>
      <AddToPlaylist/>
    </div>
  )
}
}
const mapStateToProps = state =>{
  return{
    userToken: state.userToken,
  };
};

export default connect(mapStateToProps) (LikedSongs);