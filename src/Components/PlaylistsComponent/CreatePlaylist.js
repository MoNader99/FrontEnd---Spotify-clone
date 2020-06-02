import React ,{ Component} from 'react';
import'./CreatePlaylist.css';
// import {BASEURL} from "../../Constants/baseURL";
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";



class CreatePlaylist extends Component{
  constructor(props){
    super(props);
  }
  
  // createNewPlaylist = (e) =>{
  //   e.preventDefault();
    
  //   var NewPlaylistName = document.getElementById('new-playlist-name').value; 
  //   var Privacy=false;
  //   const url =  "http://spotify-clone.mocklab.io/playlists?playlistName="+NewPlaylistName;    
  //   console.log(url);
  //   const requestOptions = {
  //     method: 'POST', 
  //     headers: {'Content-Type': 'application/json' }, 
  //     body: JSON.stringify({ playlistName: NewPlaylistName}) ,
  
  //   };    
  //      fetch(url,requestOptions)
  //       .then((res) => res.text())
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
const mapStateToProps = state =>{
  return{
    userToken: state.userToken
  };
};

export default connect(mapStateToProps) (withRouter (CreatePlaylist));