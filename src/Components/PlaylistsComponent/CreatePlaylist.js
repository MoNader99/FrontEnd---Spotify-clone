import React ,{ Component} from 'react';
import'./CreatePlaylist.css';
// import {BASEURL} from "../../Constants/baseURL";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";

/** Class CreatePlaylist 
 * @category CreatePlaylist
 * @extends Component
 */
export class CreatePlaylist extends Component{
  constructor(props){
    super(props);
  }
  
  // /**Function to create new playlist
  //  * @memberof CreatePlaylist
  //  * @func createNewPlaylist
  //  * @param e
  //  */
  // createNewPlaylist = (e) =>{
  //   e.preventDefault();
    
  //    /** A variable that contains URL 
  //    * @memberof CreatePlaylist
  //    * @type {string}
  //    */
  //   var NewPlaylistName = document.getElementById('new-playlist-name').value; 
  //   const url =  'http://localhost:3000/playlists?playlistName' +NewPlaylistName;    
  //   console.log(url);
  //   const requestOptions = {
  //     method: 'POST', 
  //     // mode:'no-cors',
  //     headers: {'Content-Type': 'application/json'}, 
  //     body: JSON.stringify({ playlistName:NewPlaylistName}) ,
  
  //   };    
  //      fetch(url,requestOptions)
  //       .then((res) => res.json())
  //       .then((data) =>{
  //         console.log(data)
  //         // this.toggle()
  //         // window.location.reload(true);
  //         // this.props.history.replace("/webplayer/playlist" + data.playlistId)
  //       })
  //       .catch((err)=>console.log(err))  
  // }
  
render(){
  return(
<div className="create-playlist ">
<div id="create-new-playist" className="modal fade" role="dialog">
<div className="modal-dialog modal-xl  ">
<div className="modal-content">


            <button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
        
          <h2 className="d-flex justify-content-center mb-3" >Create New Playlist</h2>
          <form >
          <div className="form-group container-fluid ">
          <label for="new-playlist-name">Playlist Name</label>
          <input autoComplete="off" onfocus="this.value=''" placeholder="New Playlist" type="text" className="form-control form-control-lg "  id="new-playlist-name"/>
          </div>
      
          </form>
          <div className="container-fluid">
              <div className="row">
                <div className="col-6 d-flex justify-content-end">
                <button className="btn btn-dark border border-light rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" data-dismiss="modal"> Cancel</button>
                </div>
                <div className="col-6 d-flex justify-content-start">
                <a className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" data-dismiss="modal" > Create</a>
          
            </div>
        </div>
        </div>
        </div>    
</div>
</div>
</div>
  )
}
}

/**A function connecting component to redux store
 * @memberof CreatePlaylist
 * @func mapStateToProps
 * @param {*} state
 */
const mapStateToProps = state =>{
  return{
    userToken: state.userToken
  };
};

export default connect(mapStateToProps) (withRouter (CreatePlaylist));