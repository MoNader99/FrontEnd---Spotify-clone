import React ,{ Component} from 'react';
import "./AccountLayout.css";
import SideNavSet from "../Components/Edit Artist/SideNavSet.js";
import AccountContent from '../Components/Edit Artist/AccountContent';

import {BrowserRouter as Router } from "react-router-dom";



class AccountLayout extends Component {

    render()
    {
        return (
        <div>
          
            
            <Router>
            <div className="content-wrapper d-flex justify-content-center">

                    <div className="row no-gutters container ">
                        <div className="col-sm-3 hidden-xs">

                            <SideNavSet image="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2617592195136976&height=300&width=300&ext=1586597311&hash=AeT69G6iOgUxz6VW"/>

                        </div>

                        <div className="col-sm-9">
                           <AccountContent/>

                        </div>   
                    </div>
            </div>
 
            </Router>

           
        </div>
        
        )
    }

}

export default AccountLayout