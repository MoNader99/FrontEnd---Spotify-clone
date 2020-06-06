import React ,{ Component} from 'react';
import'./EditPlaylist.css';
import {connect} from 'react-redux';
import {withRouter} from "react-router-dom";
import { BASEURL } from '../../Constants/BaseURL';


/** Class EditPlaylist 
 * @category EditPlaylist
 * @extends Component
 */
export class EditPlaylist extends Component{
  constructor(props){
    super(props);
  }
  
   /**Function to Edit playlist name
   * @memberof EditPlaylist
   * @func EditPlaylistName
   * @param e
   */
EditPlaylistName = (e) =>
{
    e.preventDefault();
    
  /** variable that the new playlist name 
    * @memberof EditPlaylist
    * @type {string}
    */
    var NewPlaylistName = document.getElementById('new-playlist-name').value; 

    /** A variable that contains URL 
    * @memberof EditPlaylist
    * @type {string}
    */
    var url =  BASEURL+"/edit-playlist";    
    const requestOptions = {
      method: 'PUT', 
      headers: {'Content-Type': 'application/json' }, 
      body: JSON.stringify({ playlistName: NewPlaylistName}) ,
  
    };    
       fetch(url,requestOptions)
        .then((res) => {
          if(res.status===200){
             console.log("response is ok")
          }
     })

        .then((data) =>{})
        .catch((err)=>console.log(err))  
  }

render(){
  return(
<div className="edit-playlist ">
<div id="edit" className="modal fade" role="dialog">
<div className="modal-dialog modal-xl  ">
<div className="modal-content">


            <button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
        
          <h2 className="d-flex justify-content-center mb-3" >Edit Your Playlist Name </h2>
          <form >
          <div className="form-group container-fluid ">
          <label for="new-playlist-name">Playlist Name</label>
          <input autoComplete="off" onfocus="this.value=''" placeholder={this.props.playlistname} type="text" className="form-control form-control-lg "  id="new-playlist-name"/>
          </div>
      
          </form>
          <div className="container ">
              <div className="row">
                <div className="col-6 d-flex justify-content-end">
                <button className="btn btn-dark border border-light rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" data-dismiss="modal"> Cancel</button>
                </div>
                <div className="col-6 d-flex justify-content-start">
                <a onClick={this.EditPlaylistName} className=" btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold" data-dismiss="modal" > Edit</a>
          
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
 * @memberof EditPlaylist
 * @func mapStateToProps
 * @param {*} state
 */
const mapStateToProps = state =>{
  return{
    userToken: state.userToken
  };
};

export default connect(mapStateToProps) (withRouter (EditPlaylist));