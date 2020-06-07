import React , {Component} from "react";
import "./SideNavSet.css";
import Image from './Image'
import {ImageChanged} from './ChangeProfilePhoto'
import ProfileImage from './ProfileImage'
import {connect} from 'react-redux';

import {NavLink, withRouter,Link} from "react-router-dom";



class AccountSidebar extends Component {
    
 
    render(){
        var x;
        if(this.props.url==null){
            x=""
        }
        else{
            x=this.props.url
        }
        console.log(x)
return(
    <div className="account-sidebar">

        <img className="user-img" alt="Profile" Src={x}  />

        <div className="side-items">
        
        
        <NavLink to="/account/overview/" >
            <i className="fas fa-home"> <span className="fa-icon-innter-text">&nbsp;Edit Bio</span></i>
        </NavLink>         

      
        <NavLink to="/account/profile/" >
            <i className="fas fa-pencil-alt"> <span className="fa-icon-innter-text">&nbsp;Edit Profile</span></i>
        </NavLink>

        
        <NavLink to="/account/change-cover-photo/" >
            <i className="fas fa-camera"> <span className="fa-icon-innter-text">&nbsp;Change Cover Photo</span> </i>
        </NavLink>

        <NavLink to="/account/change-photo/" >
            <i className="fas fa-image"> <span className="fa-icon-innter-text">&nbsp;Change Profile Photo</span> </i>
        </NavLink>

        <a href="/artist/audience" >
            <i className="fa fa-users icon"> <span className="fa-icon-innter-text">&nbsp;Audience</span> </i>
        </a>

        <a href="/artist/addalbum" >
            <i className="fa fa-music icon"> <span className="fa-icon-innter-text">&nbsp;My Albums</span> </i>
        </a>

        </div>

    </div>
)}};

const mapStateToProps = state =>{
    return{
      url: state.ProfileImgUrl,
    };
  };

  export default connect(mapStateToProps)(withRouter(AccountSidebar))