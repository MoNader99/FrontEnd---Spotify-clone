import React ,{ Component} from 'react';
import './welcomePage.css';
import Bottom from "../../Components/WelcomeRelated/Bottom";
import MainNavbar from "../../Components/WelcomeRelated/MainNavbar";

/** Class welcomePage 
 * @category welcomePage
 * @extends Component
 */
class welcomePage extends Component{
	render() 
	{
		return(
		<div className="welcome-page-body">
		<MainNavbar/>
			<div className="container">
				<div className="row">
	    			<div className="col-lg-12 text-center back ">
	     		   		<h1> Music For Everyone. </h1>
	      		   		<h3> Millions of songs. No credit card needed.</h3>
	      		   		<a href="/signup" id="button-sign" className="btn btn-success rounded-pill text-center d-flex justify-content-center" >
							 Get Spotify Free
                </a> 
	   				</div>
	 			</div>
			</div>
      <div>
        <Bottom/>
      </div>

    </div>
		)
	}
}
export default welcomePage