import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from '../SideBar/ArtistSidebar';
import './ArtistProfile.css'
import $ from 'jquery';
import 'bootstrap';
import { MainNavbar } from '../../WelcomeRelated/MainNavbar';
import Bottom from '../../WelcomeRelated/Bottom';
 

class AddSong extends Component {
    constructor() {
        super()
        this.state = {
            addSong: true,
            songName: ""
        }
    }
    componentDidMount(){
        if(this.state.addSong===false) {
            document.getElementById("song-name").value = this.state.songName;
        }
    }


    formSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", document.getElementById("song-name").value);
        formData.append("song", document.getElementById("custom-file").files[0]);
        //add request
        $('#done-modal').modal('show');
    }
    

    render()
    {
        {document.title ="Artist - Spotify"}

    return(
        <div className="artist-page">
            <MainNavbar color="black"/>
        <div className="background-color">
                <div id="artist-add-song" className="container"> 
                    <div className="row">
                        <SideBar/>
                        <div className="col-lg-9 col-sm-12 song-section">
                            <div className="song-div">
                                <h1 className="page-header">Add & Edit Songs</h1>
                                <div className="song-info">
                                <form className="container" id="add-song-form" onSubmit={this.formSubmit}>
                                        <div class="form-group">
                                            <input type="text" className="form-control" id="song-name" placeholder="song name" required/>
                                            <small className="form-text text-muted">Song name.</small>
                                        </div>
                                        <div className="custom-file mb-4 ">
                                            <input type="file" className="custom-file-input" id="custom-file"/>
                                            <label className="custom-file-label" htmlFor="customFile"></label>
                                            <small className="form-text text-muted">Upload your song.</small>
                                        </div>
                                        {this.state.addSong === true ? <input type="submit" value="Add" className="btn btn-success btn-block mt-4"></input> : <input type="submit" value="Edit" className="btn btn-success btn-block mt-4"></input>}
                                    </form>
                                </div>
                                <div className="modal" id="done-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        {this.state.addSong === true ? <div class="modal-body"> Song Added Successfully!!</div> : <div class="modal-body"> Song Edited Successfully!!</div>}
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div> 
                </div>  
            </div>
           
        <div/>
        <Bottom/>
        </div>
    )
    }
}

export default AddSong;