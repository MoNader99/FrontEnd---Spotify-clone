import React, { Component } from "react";
import "./HomePageNavbar.css";
import {BrowserRouter,withRouter} from "react-router-dom";
import {NavLink, Link} from "react-router-dom";
import { render } from "@testing-library/react";
import { connect } from "react-redux";
import * as actionTypes from "../../Store/actions";


 
/** Class HomepageSidebar 
 * @category HomePage
 * @extends Component
 */
export class HomePageNavbar extends Component{
  constructor(props){
    super(props); 
    this.props={
  /**URL of image in dropdown menu
   * @memberof HomePageNavbar
   * @type {string}
   */
      image:"",
  /**Name in dropdown menu
   * @memberof HomePageNavbar
   * @type {string}
   */
      name:"",
   /**Account type to indicate whether the upgrade button should show or not.
   * @memberof HomePageNavbar
   * @type {string}
   */
      accountType:""
     
    }
  }

  // handleBackButton = () => {
  //   // let history = useHistory()
  //   // history.goBack();
  // };
  
  render(){
  return (

            <div className="home-nav"  style={{backgroundColor: this.props.color}}> 
                              
              <div className="home-nav-nabar">
              
                <div className="collapse-drop">
                <div className="Collapse-drop-down">
                  <div className="home-drop">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i class="fa fa-home" aria-hidden="true"></i>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <Link className="no-underline" to="/webplayer/home/"><a class="dropdown-item" href="#"><i className="fas fa-home"></i> Home</a></Link>
                          <Link to="/webplayer/search/"><a class="dropdown-item" href="#"><i className="fas fa-search" aria-hidden="true"></i> Search</a></Link>
                          <NavLink to="/webplayer/yourlibrary/"><a class="dropdown-item" href="#"><i className="fas fa-bookmark" aria-hidden="true"></i> Your library</a></NavLink>
                          <Link to="#"><a data-toggle="modal" data-target="#create-new-playist" class="dropdown-item" href="#"><i className="fas fa-plus-square" aria-hidden="true"></i> Create playlist</a></Link>
                          <Link to="/webplayer/likedsongs"><a class="dropdown-item" href="#"><i className="fas fa-heart " aria-hidden="true"></i> Liked songs</a></Link>
                          <Link to="/premium"><a class="dropdown-item" href="#">  <i class="fa fa-usd" aria-hidden="true"></i>  Upgrade</a></Link>

                          </div>
                    </div>
                          
                  </div>
                </div>
                
                
              </div>
              {this.props.page == "library" ? 
              <div>
                  <Link to="/webplayer/yourlibrary" ><button id="upgradebtn">yourlibrary</button></Link>
                  <Link to="/webplayer/yourlibrary-artists" ><button id="upgradebtn">Artists</button></Link>
                  <Link to="/webplayer/yourlibrary-albums" ><button id="upgradebtn">Albums</button></Link>
              </div>
              :
              null}
              
              <div className="drop-down">
                { this.props.logged==false ?
                <div>
                    <a href="/signup" className="signup btn rounded-pill text-center">SIGN UP</a>
                    <a href="/login" className="login btn btn-light rounded-pill text-center">LOG IN</a>
                </div>
                :
                <div>
                    <div id="profile">
                     <a className="nav-link dropdown-toggle" href="/account-overview" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <img className="user-img" alt="." src={this.props.image} />
                         Profile
                        </a>
                    
                        <div className="dropdown-menu dropdown-menu-right " aria-labelledby="navbar-dropdown">
                            <a className="dropdown-item drop-class" href="/account-overview">Account</a>
                            <a onClick={this.props.onSignOut} className="dropdown-item drop-class" href="/">Sign out</a>
                        </div>
                    </div>
                </div>
                }
              </div>


            </div>
                   
);
  }
}

const mapStateToProps = state =>{
    return{
      logged: state.loggenIn,
      image: state.userImg
    };
  };
const mapDispatchToProps = dispatch => {
    return {
      onSignOut : () => dispatch ({type: actionTypes.ON_SIGNOUT}),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(HomePageNavbar);