import React, { Component } from 'react'

import ReactDOM from 'react-dom';
import Image from './Image' 
var check
const $ = window.$;



class ProfileImage extends Component{


constructor(props){

super(props)
this.state={

  images:[]
}


}
componentDidMount(){
  fetch('http://spotify-clone.mocklab.io/get-tracks').then(response=>{
    return response.json();
  }).then(({tracks})=>{
    this.setState({images:tracks});
  });

}


    render(){
      const Imgs = () => {
        var x =9;
        const imgs = this.state.images.slice(0,1).map((user,x)=>{ 
          return <Image Src={this.state.images[x].imgURL} />})
       return (
           <div>
               {imgs}
           </div>
       )
      }
      
    return(
        <div><Imgs></Imgs></div>
     
    )}
};
export default ProfileImage;