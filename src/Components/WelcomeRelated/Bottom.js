import React, { Component } from "react";
import "./Bottom.css";

/** Class Bottom 
 * @category Bottom
 * @extends Component
 */
class Bottom extends Component {
  render(){
		return(
			<footer className="bottom-bar page-footer pt-4 ">
			  <div className=" container text-center text-md-left">
				<div className="row">
				  	<div className="col-md-4 mt-md-0 mt-3">
					  <a href="/" className="logo"> <i className="fab fa-spotify"></i> Spotify </a>
				  	</div>


				<div className="col-md-3 mb-md-0 mb-3">
					<h5 className="titleBottom">Company</h5>
					<ul className="list-unstyled">
					  <li>
						<a href="/aboutus" className="links-hover"> About Us </a>
					  </li>
					</ul>
				</div>	  

				   <hr className="clearfix w-100 d-md-none pb-3"/> 
				<div className="col-md-3 mb-md-0 mb-3">
					<h5 className="titleBottom">Useful Links</h5>
					<ul className="list-unstyled">
					  <li>
						<a href="/help" className="links-hover"> Help </a>
					  </li>
					  <li>
						<a href="/webplayer/home" className="links-hover"> Web Player</a>
					  </li>
					</ul>
				</div>

				 	<div className="col-md-1 ">
					 	<a href="#"> <i className=" face-logo fab fa-facebook  "></i> </a>
				
				 	</div>
			  </div> 
			</div>
			  <div className=" language d-flex justify-content-center py-3">
				  Egypt (English)
			  <img src="https://masthead.scdn.co/065b62cfb94f49960e7c37413175e2bb/flags/eg.svg" alt="" className="img-size"></img>
			  </div>
			</footer>
		)	
}
}
export default Bottom