import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import SideBar from '../SideBar/ArtistSidebar';
import './ArtistProfile.css'
import $ from 'jquery';
import 'bootstrap';
import MainNavbar from '../../WelcomeRelated/MainNavbar'
import Bottom from '../../WelcomeRelated/Bottom';
import {BASEURL} from '../../../Constants/BaseURL';

class AddAlbum extends Component {
    constructor() {
        super()
        this.state = {
          albumToDelete: -1,
          popularAlbums:[],
          addAlbum: true,
        }
        this.formSubmit=this.formSubmit.bind(this)
        this.deleteAlbum=this.deleteAlbum.bind(this)
        this.deleteAlbumModal=this.deleteAlbumModal.bind(this)
        this.resetDeleteAlbumState=this.resetDeleteAlbumState.bind(this)
        this.editAlbum=this.editAlbum.bind(this)
    }
    componentDidMount(){
        axios.get(BASEURL+"/artist/1234567/albums",{
            headers: {
                'authorization': "Bearer "
            },
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        popularAlbums: res.data.data.map( album => ({
                            id:album._id,
                            title:album.name,
                            albumGenre:album.genre,
                            albumType:album.type,
                            imageUrl:album.image,
                            artist:album.artists[0].name
                        }))
                    })
                }
            }) 
    }

    showAddAlbum() {
        var form = document.getElementById("add-album-form");
        form.reset();
        this.setState({addAlbum: true})
        const addDiv = document.querySelector('.add-new-album');
        addDiv.classList.add("show");
    }

    showEditAlbum() {
        const addDiv = document.querySelector('.add-new-album');
        addDiv.classList.add("show");
    }

    deleteAlbumModal(albumId) {
        $('#delete-modal').modal('show');
        this.setState({albumToDelete: albumId})
    }

    deleteAlbum() {
        const addDiv = document.querySelector('.add-new-album');
        addDiv.classList.remove("show");
        $('#delete-modal').modal('hide');
        axios.delete(BASEURL+"/artist/album",{
            headers: {
                'authorization': "Bearer "
            },
        })
        const deletedAlbum = document.getElementById(this.state.albumToDelete);
        deletedAlbum.classList.add('hide');
        this.setState({albumToDelete: -1})
    }

    resetDeleteAlbumState() {
        this.setState({albumToDelete: -1})
    }

    formSubmit(event) {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", document.getElementById("album-name").value);
        formData.append("albumType", document.getElementById("album-type").value);
        formData.append("genre", document.getElementById("album-genre").value);
        formData.append("image", document.getElementById("custom-file").files[0]);
        if(this.state.addAlbum) {
            axios.post(BASEURL+"/artist/album", 
            {
                "newAlbum": formData
            },
            {
                headers: {
                    'authorization': "Bearer ",
                }
            })
            .then(res => {
                if(res.status === 200)
                {
                    $('#done-modal').modal('show');
                }
        })
        }
        else {
            axios.put(BASEURL+"/artist/album/1234567", 
            {
                "album": formData
            },
            {
                headers: {
                    'authorization': "Bearer ",
                }
            })
            .then(res => {
                if(res.status === 200)
                {
                    $('#done-modal').modal('show');
                }
        })
        }
        const addDiv = document.querySelector('.add-new-album');
        addDiv.classList.remove("show");
    }
    
    editAlbum(albumId) {
        var form = document.getElementById("add-album-form");
        form.reset();
        this.setState({addAlbum: false})
        var album = this.state.popularAlbums.find(obj => {
            return obj.id === albumId
        })
        document.getElementById("album-name").value = album.title;
        document.getElementById("album-type").value = album.albumType;
        document.getElementById("album-genre").value = album.albumGenre;
        this.showEditAlbum();
    }

    render()
    {
        {document.title ="Artist - Spotify"}

    return(
        <div className="artist-page">
             <MainNavbar color="black"/>
        <div className="background-color">
                <div id="artist-add-album" className="container"> 
                    <div className="row">
                        <SideBar/>
                        <div className="col-lg-9 col-sm-12 album-section">
                            <div className="album-div">
                                <h1 className="page-header">My Albums</h1>
                                <div className="album-info">
                                    <div className="add-album-btn">
                                        <button className="btn btn-success" onClick={()=> this.showAddAlbum()}>Add New Album</button>
                                    </div>
                                    <div className="card-group">
                                        {this.state.popularAlbums.map( album => (
                                        <div>
                                            <div className="card" id={album.id}>
                                                <img src={album.imageUrl} className="card-img-top" alt="..."></img>
                                                <div className="card-body">
                                                    <h5 className="card-title">{album.title}</h5>
                                                    <p className="card-text">{album.artist}</p>
                                                    <div id={album.id}>
                                                        <button id={album.id} className="btn btn-danger delete-btn" onClick={()=>this.deleteAlbumModal(album.id)}><i className="fa fa-close"></i></button>
                                                        <button id={album.id} className="btn btn-primary edit-btn" onClick={()=>this.editAlbum(album.id)}><i className="fa fa-pencil-square-o"></i></button>
                                                    </div>    
                                                </div>  
                                            </div>
                                        </div>
                                        )
                                        )}
                                    </div>
                                </div>
                                <div className="add-new-album">
                                    <form className="container" id="add-album-form" onSubmit={this.formSubmit}>
                                        <div className="row">
                                        <div class="form-group col">
                                            <input type="text" className="form-control" id="album-name" placeholder="Album name" required/>
                                            <small className="form-text text-muted">Album name.</small>
                                        </div>
                                        <div class="form-group col">
                                            <input type="text" className="form-control" id="album-type" placeholder="Album type"required/>
                                            <small className="form-text text-muted">Album type.</small>
                                        </div>
                                        <div class="form-group col">
                                            <input type="text" className="form-control" id="album-genre" placeholder="Album genre"required/>
                                            <small className="form-text text-muted">Album genre.</small>
                                        </div>
                                        </div>
                                        <div className="custom-file mb-4 ">
                                            <input type="file" className="custom-file-input" id="custom-file"/>
                                            <label className="custom-file-label" htmlFor="customFile"></label>
                                            <small className="form-text text-muted">Upload your album cover photo.</small>
                                        </div>
                                        {this.state.addAlbum === true ? <input type="submit" value="Add" className="btn btn-success btn-block mt-4"></input> : <input type="submit" value="Edit" className="btn btn-success btn-block mt-4"></input>}
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
                                        {this.state.addAlbum === true ? <div class="modal-body"> Album Added Successfully!!</div> : <div class="modal-body"> Album Edited Successfully!!</div>}
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal" id="delete-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure you want to delete this album?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-dark" data-dismiss="modal" onClick={this.resetDeleteAlbumState}>No</button>
                                            <button type="button" class="btn btn-dark" onClick={this.deleteAlbum}>Yes</button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div> 
                </div>  
            </div>
            <Bottom/>
            </div>
    )
    }
}

export default AddAlbum;