import React ,{ Component} from 'react';
import'./AddToPlaylist.css';
import LikedSongs from '../LikedSongs/LikedSongs';
import DeletePlaylist from './DeletePlaylist';
import CreatePlaylist from './CreatePlaylist';

export class AddToPlaylist extends Component{
  state= 
{ 
    plalistInfo: [
      {id : 1, PlalistImage : "https://miro.medium.com/max/2480/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg", PlaylistName: "test",SongsNumber : "17"},
      {id : 2, PlalistImage : "https://papers.co/wallpaper/papers.co-ac23-wallpaper-ghost-stories-coldplay-cover-art-2-wallpaper.jpg", PlaylistName: "test",SongsNumber : "34"},
      {id : 3, PlalistImage : "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/3c/d0/bf/3cd0bfbe-45e1-d59a-2ed5-2c514d562841/5060450066310.png/600x600bf.png", PlaylistName: "test",SongsNumber : "12"},
      {id : 4, PlalistImage : "https://i.ibb.co/16jcXQg/single-bar-note.jpg", PlaylistName: "test",SongsNumber : "17"},
      {id : 5, PlalistImage : "https://live.staticflickr.com/3950/15577286828_a0e008583e_z.jpg", PlaylistName: "test",SongsNumber : "34"},
      {id : 6, PlalistImage : "https://is2-ssl.mzstatic.com/image/thumb/Music118/v4/3c/d0/bf/3cd0bfbe-45e1-d59a-2ed5-2c514d562841/5060450066310.png/600x600bf.png", PlaylistName: "test",SongsNumber : "12"},
      {id : 7, PlalistImage : "https://miro.medium.com/max/2480/1*8FkvzbSdSJ4HNxtuZo5kLg.jpeg", PlaylistName: "test",SongsNumber : "17"},
    ]
  }
 
render()
{
return (
  <div className="add-to-playlist" >
                   
  <div id="add-to-playlist" className="modal fade" role="dialog">
<div className="modal-dialog modal-xl  ">
<div className="modal-content">

<div className="d-flex justify-content-center">

<button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>

        </div>
        <h2 className="d-flex justify-content-center mb-3" > Add To playlist</h2>
        
            <div className="container ">
              
                 
              <div className="d-flex justify-content-center my-4">
                  <a data-dismiss="modal" data-target="#create-new-playist" className=" btn btn-success rounded-pill text-center px-5 py-2 font-weight-bold"> New Playlist</a>
              </div>
            </div>     
           
            <div className="container-fluid row">
            {this.state.plalistInfo.map((playlist,index)=>( 
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                     <li className="list-unstyled d-flex justify-content-center"> <img className="image"  src={playlist.PlalistImage} alt="" /> <span title="Add to playlist"><i className="fas bar"></i></span> </li>
                     
                      <p className="name-of-song d-flex justify-content-center font-weight-normal"> {playlist.PlaylistName}</p>
                      <p className="number-of-songs d-flex justify-content-center font-weight-light">{playlist.SongsNumber} </p>
                </div> 
            ))}
            </div> 

</div>
</div>

  </div>
<CreatePlaylist/>
  </div>       
     
)
}
}

export default AddToPlaylist