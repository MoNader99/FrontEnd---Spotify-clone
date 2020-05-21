import React from 'react'
import './HeaderBackground.css';



const HeaderBackground= () =>{

    return(
        
        <div className="help-class">
         
        
            <div className="help-header">
            <div className="container">
                
                <h1>How can we help you?</h1>
                <input type="text" class="form-control" id="search" placeholder="Search" autocomplete="off"/>
                    
                <div className="row">

                <div className="col-5 col-md-3 side-text-help">
                <p>ACCOUNT HELP</p>
                <h5>Finding accounts</h5>
                </div>
                </div>
                </div>
            
            </div>
            </div>



    );
}
export default HeaderBackground;