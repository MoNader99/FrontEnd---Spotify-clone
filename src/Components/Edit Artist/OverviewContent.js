import React, { Component } from "react";
import "./OverviewContent.css"
import {Link} from "react-router-dom"
import InfoLine from "./InfoLine"
import Data from './Data'
const currentuser={
    "User":
        {
      "id" : "0OdUWJ0sBjDrqHygGUXeCF",
      "email": "abc@gmail.com",
      "totalfollowers" : 306565,
      "isactive": true,
      "ispremium":false,
        },
    
    "username" : "Jadams",
    "fname" : "John",
    "lname" : "Adams"
    }
/** Class Overview Content
 * @category Edit Artist
 * @extends Component
 */
class OverviewContent extends Component{



  constructor(props){

    super(props)
    this.state={
    
      data:[]
    }
    
    
    }
    
 /**Function that is called when the component renders
   * @memberof OverviewContent
   * @func componentDidMount
   */
    componentDidMount(){
      fetch('http://spotify-clone1.mocklab.io/artist-data').then(response=>{
        return response.json();
      }).then(({artists})=>{
        this.setState({data:artists});
      });
    
    }

    render(){
      const Datas = () => {
        
        const datas = this.state.data.slice(0,1).map((user,i)=>{ 
          return <Data Country={this.state.data[i].country} email={this.state.data[i].Email} username={this.state.data[i].ArtistName} fname={this.state.data[i].Firstname} lname={this.state.data[i].Lastname}/>})
       return (
           <div>
               {datas}
           </div>
       )
      }





return(

<div className="ac-ov">
        <h1><strong>Edit Bio</strong></h1>
        <h3 style={{marginTop:"5%"}}><strong>Bio</strong></h3>
         <Datas></Datas>
        <Link to="/account/profile" className="ep-bt">EDIT BIO</Link>

        
</div>
)
}
};


export default OverviewContent