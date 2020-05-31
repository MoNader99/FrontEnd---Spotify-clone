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

                </div>
                  
                
                  <div id="ul-upgrade" className={this.props.accountType == "premium" ? 'd-none' : ''}>
                  <Link to="/premium"><button id="upgradebtn">UPGRADE</button></Link>
                  </div>
                
              </div>
              
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