import React from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
    console.log('login result',response);
}

const componentclicked = (data)=>{
    console.warn(data)
}

const LoginFacebook = ()=>{

    return(
        <FacebookLogin
            appId="284237482611651"
            autoLoad={false}
            fields="name,email,picture"
            onClick={componentclicked}
            callback={responseFacebook} />
    )
}

export default LoginFacebook