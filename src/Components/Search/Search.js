import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
    state= 
  { 
      geners: [
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        {image_URL: "https://ph-files.imgix.net/cbbf111b-fccf-48a7-8505-bedc7b5d5272?auto=format" , Card_name:"Made For You", style:{'background': 'rgb(180,32,112)' , 'background' : 'linear-gradient(0deg, rgba(180,32,112,1) 0%, rgba(237,54,95,1) 72%)'}},
        {image_URL: "https://raw.githubusercontent.com/yboyer/realreleaseradar/master/.github/cover.jpg" , Card_name:"New Relese", style:{'background': 'rgb(32,65,180)' , 'background' : 'linear-gradient(0deg, rgba(32,65,180,1) 0%, rgba(54,150,237,1) 72%)'} },
        {image_URL: "https://t.scdn.co/images/ad4d5c268a214f78920517e76e6ed107.jpeg" , Card_name:"Podcast",style:{'background': 'rgb(242,232,118)' , 'background' : 'linear-gradient(0deg, rgba(242,232,118,1) 0%, rgba(213,167,29,1) 19%)'}},
        
      ]
  }

  render(){
		return(
        <div className="Search">
            <nav class="navbar mb-4 ">
            
                <div className="d-flex">
                    <a className="previous" href="#" > &#60; </a>
                    <a className="next" href="#"> &#62; </a>
                    <div className="Search-content">
                        <span className="search-search-icon" ><i className="fas fa-search"></i></span>
                        <input className="Search-bar form-control" placeholder="Search for Artists, Songs, or products" aria-label="Search" ></input>
                    </div>
                </div>
                
                <div>
                    <a className="signup btn rounded-pill text-center">SIGN UP</a>
                    <a className="login btn btn-light rounded-pill text-center">LOG IN</a>
                </div>
            </nav>
            
            <div className="component-content">
                <h2 className="d-flex browse">Browse All</h2>

               { this.state.geners.map((Card,index)=>(
                <div class="BrowseItem" style={Card.style} key={index}>
                    <h3 class="head-style">{Card.Card_name}</h3>
                    <img src={Card.image_URL} class="img-style" alt=""></img>
                </div>
               ))}
            </div>
        </div>
		)	
    }
}
export default Search