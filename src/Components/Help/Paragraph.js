import React from 'react'
import './Paragraph.css'
import 'bootstrap/dist/css/bootstrap.min.css'



const Paragraph= () =>{

    return(
        
        <div className="get-spotify-sugg">
        <div className="container">
           <h1>Still not on Spotify?</h1>
           <div className="row justify-content-center">

           <div className="col-12 col-md-6">

           <p>Over 30 million tracks; thousands of curated playlists; Discover Weekly; Spotify Running; Radio; Chromecast, sound system, car, TV, and PlayStation integration; sharing and creating playlists with your friends... All of this is ready for you.</p>
           </div>
           </div>
           <button>GET SPOTIFY</button>
       </div>
   </div>   

    );
}
export default Paragraph;