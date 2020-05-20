import React ,{ Component }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import SideBar from '../SideBar/ArtistSidebar';
import './ArtistProfile.css'

class AddAlbum extends Component {
    constructor() {
        super()
        this.state = {
          nowPlaying: {id: -1},
          popularAlbums:[],
        }
    }
    componentDidMount(){
        axios.get("http://spotify.mocklab.io"+"/albums/top",{
            headers: {
                'authorization': "Bearer "+localStorage.getItem("token"),
            },
            params: {
                limit: 9,
                sort: "-popularity"
            }
        })
            .then(res => {
                if(res.status === 200)
                {
                    this.setState({
                        popularAlbums: res.data.data.albums.map( album => ({
                            id:album._id,
                            title:album.name,
                            imageUrl:album.image,
                            artist:album.artists[0].name
                        }))
                    })
                }
                else if(res.status === 401)
                {
                    localStorage.removeItem("loginType");
                    localStorage.removeItem("isLoggedIn");
                    localStorage.removeItem("token");
                    localStorage.removeItem("userID");
                }
            }) 
    }

    showAddAlbum() {
            const addDiv = document.querySelector('.add-new-album');
            addDiv.classList.toggle("show");
    }

    render()
    {
        {document.title ="Your Library - Spotify"}

    return(
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
                                                        <button id={album.id} className="btn btn-danger delete-btn" ><i className="fa fa-close"></i></button>
                                                    </div>    
                                                </div>  
                                            </div>
                                        </div>
                                        )
                                        )}
                                    </div>
                                </div>
                                <div className="add-new-album">
                                    <form className="container">
                                        <div class="form-group">
                                            <input type="text" className="form-control" id="label" placeholder="Album name" onChange=""/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" className="form-control" placeholder="Album type" onChange=""/>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" className="form-control" placeholder="Genre type" onChange=""/>
                                        </div>
                                        <div className="custom-file mb-4 ">
                                            <input type="file" className="custom-file-input" id="customFile" onChange=""/>
                                            <label className="custom-file-label" htmlFor="customFile"></label>
                                        </div>
                                        <input type="submit" value="Add" className="btn btn-success btn-block mt-4"></input>
                                    </form>
                                </div>
                            </div>
                        </div>  
                    </div> 
                </div>  
            </div>
    )
    }
}

export default AddAlbum;