import React from "react";
import "./AccountContent.css";
import OverviewContent from "./OverviewContent.js";
import ChangeCoverPhoto from './ChangeCoverPhoto';
import ChangeProfilePhoto from './ChangeProfilePhoto.js';
import {Route , Switch, Redirect} from "react-router-dom";
import EditProfile from "./EditProfile.js";



const AccountContent= (props) => (


    <div className="account-content">
            <Switch>
                {/* <NavBar/> */}
                <Route path="/account/overview" component={OverviewContent}></Route>
                <Route path="/account/profile" component={EditProfile}></Route>
                <Route path="/account/change-cover-photo" component={ChangeCoverPhoto}></Route>
                <Route path="/account/change-photo" component ={ChangeProfilePhoto}></Route>
                

               

            </Switch>

    </div>



);

export default AccountContent;