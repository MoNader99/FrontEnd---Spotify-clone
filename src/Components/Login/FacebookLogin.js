import React from 'react';
import FacebookLogin from 'react-facebook-login';
import {connect} from 'react-redux'
import * as actionTypes from "../../Store/actions";
import { Component } from 'react';



const componentclicked = (data)=>{
    console.warn(data)
}
// onSignIn : (user) => dispatch ({type: actionTypes.ON_SIGNIN, payload: {user:user} }),

class LoginFacebook extends Component{
    constructor(){
        super()
    }
    responseFacebook = (response)=>{
        // dispatch = useDispatch();
        // let user ={
        //     email:response.email,
        //     name:response.name,
        // }
        // dispatch({type: actionTypes.ON_SIGNIN, payload: {user:}})
        console.log('login result',response);
        let user = {
            email: response.email,
            name: response.name,
        }
       if(user.email) {
        this.props.onSignIn(user)
        window.location.replace("/account-overview");
       }

    }
    
    render(){
    return(
        <FacebookLogin
            appId="284237482611651"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentclicked}
            callback={this.responseFacebook} />
    )
    }
}
const mapDispatchToProps = dispatch => {
    return {
      onSignIn : (user) => dispatch ({type: actionTypes.ON_SIGNIN, payload: {user:user} }),
    };
  };

export default connect(null, mapDispatchToProps)(LoginFacebook);
