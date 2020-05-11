import React ,{ Component} from 'react';
import './Login.css'

class Login extends Component{

    state =
    {
        email: "" ,
        password: "" ,
    }


    render(){
    return(
        <div className="login-page">
            <div className="login-logo">
                <a className="spotify-login image" title="Spotify" href="/"></a>
                <div className="border-bottom mt-4"></div>
            </div>
                <div className="container login-content">
           
                    <p> <strong> To continue, log in to Spotify.</strong> </p>
                    <button id="facebook-button" className="btn rounded-pill text-center " >
                    <i className="fab fa-facebook"></i> continue with facebook </button> 
                    <div className="border-divider">
                        <strong className="or-login">or</strong>
                    </div>
                    <form>
                    <div className="form-group">
                        <input type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        
                        <input type="password" className="form-control" id="input-password" placeholder="Password" required/>
                            <div className="form-check check-log">
                                <input type="checkbox" className="form-check-input" id="checkbox"/>
                                <label className="form-check-label" for="exampleCheck1">Remember Me</label>
                                <button type="submit" className="btn rounded-pill text-center login-button">Log In</button>
                            </div>
                        <div className="forget-pass">
                        <a className="col-xs-12 text-center"> Forget Your Password? </a>
                        </div>  
                    </div>
                    </form>
                    <div className="border-divider"></div>
                    <div>
                        <h5>Don't have an account?</h5>
                        <button className="btn rounded-pill text-center signup-button">Sign up for spotify</button>
                    </div>
                    <div className="border-divider"></div>
                </div>
        </div>
    )
}
}
 export default Login