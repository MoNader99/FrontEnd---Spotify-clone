import React ,{ Component} from 'react';
import './Login.css'
import {connect} from "react-redux";
import * as actionTypes from "../../Store/actions";
import { BASEURL } from '../../Constants/BaseURL';
import LoginFacebook from '../Login/FacebookLogin'

/** Class Login 
 * @category Login
 * @extends Component
 */
export class Login extends Component{

    state = {
        /**Object of email style
        * @memberof Login
        * @type {object}
        */
        emailStyle:{},

        /**Object of password style
        * @memberof Login
        * @type {object}
        */
        passwordStyle:{},

        /**Email text
        * @memberof Login
        * @type {string}
        */
        EmailText: "",

        /**Password text
        * @memberof Login
        * @type {string}
        */
        PasswordText:"",

        /**Email error validation
        * @memberof Login
        * @type {string}
        */
        emailError: "",

        /**Password error validation
        * @memberof Login
        * @type {string}
        */
        passwordError: "",

        /**Array to check emails with the given ones
        * @memberof Login
        * @type {Array<emails>}
        */
        checkEmail:[],

        /**Array to check passwords with the given ones
        * @memberof Login
        * @type {Array<passwords>}
        */
        checkPassword:[],

        /**Check if correct or not
        * @memberof Login
        * @type {boolean}
        */
        checkedCorrect: false,

        /**Array includes data of users
        * @memberof Login
        * @type {Array<users>}
        */
        users:[]
    }

    /**Function to Validate email
   * @memberof Login
   * @func validateEmail
   * @param event
   */
    validateEmail = (event) => {
        let EmailText = event.target.value;
        if (EmailText=="")
        {
            this.setState({emailError: "Please enter a valid email"})
            this.setState({emailStyle:{'border': '1px solid red'}})
        }
        else
        {
            this.setState({emailStyle:{}})
            this.setState({emailError:null})
            this.setState({EmailText:EmailText})
        }
    }

    /**Function to Validate Password
   * @memberof Login
   * @func validatePassword
   * @param event
   */
    validatePassword = (event) => {
        let PasswordText = event.target.value;
        if (PasswordText=="")
        {
            this.setState({passwordError: "Please enter your password."})
            this.setState({passwordStyle:{'border': '1px solid red'}})
        }
        else
        {
            this.setState({passwordError:null})
            this.setState({passwordStyle:{}})
            this.setState({PasswordText:PasswordText})
        }
        
    }

    /**Function to Handle Login
   * @memberof Login
   * @func handleLogIn
   * @param event
   */
    handleLogIn = event => 
    {

        if(this.state.checkPassword.includes(this.state.PasswordText) && this.state.checkEmail.includes(this.state.EmailText)) 
        { 
            var id=this.state.checkEmail.indexOf(this.state.EmailText)
            var user=this.state.users[id]
            this.setState({checkedCorrect:false})
            if(user.type=="user"){
            window.location.replace("/account-overview");
            this.props.onSignIn(user);
            }
            else if (user.type=="artist"){
            window.location.replace("/account");
            this.props.onSignInArtist(user);
            }
        }
        else
        {
           this.setState({checkedCorrect:true})
        }  
    }

    // handleLogIn =event =>
    // {
    //      /** A variable that contains email input from the user
    //       * @memberof Login
    //       * @type {string}
    //       */
    //     var inputEmail = document.getElementById('input-email').value;

    //     /** A variable that contains password input from the user
    //       * @memberof Login
    //       * @type {string}
    //       */
    //     var inputPassword = document.getElementById('input-password').value;
        
    //      /** A variable that contains URL 
    //       * @memberof Login
    //       * @type {string}
    //       */
    //      var url =  BASEURL+"/login";    
    //      const requestOptions = {
    //        method: 'POST', 
    //        headers: {'Content-Type': 'application/json' }, 
    //        body: JSON.stringify({ email:inputEmail, password:inputPassword}) ,
       
    //      };    
    //         fetch(url,requestOptions)
    //          .then((res) => {
    //            if(res.status===200){
    //               console.log("response is ok")
    //               this.setState({checkedCorrect:false})
    //            }
    //            else{
    //             this.setState({checkedCorrect:true})
    //            }
    //       })
     
    //          .then((data) =>{})
    //          .catch((err)=>console.log(err))

    // }



    /**Function that is called when the component renders
    * @memberof Login
    * @func componentDidMount
    */
    componentDidMount(){
        /** URL path to get the users data 
        * @memberof Login
        * @type {string}
        */
        var url = BASEURL+ "/get-users-login"; 
        const requestOptions = {
            method: 'GET',
          };
          fetch(url,requestOptions)
            .then((response) => { return response.json()})
            .then((data) => {
              this.setState({ 
                users:data.users,
              });
          
              for (var x=0;x<this.state.users.length;x++){
                  this.state.checkEmail.push(this.state.users[x].Email)
                  this.state.checkPassword.push(this.state.users[x].Password)
              }

            })
            
            .catch((error)=>{console.log(error);
          
            })
    }
   
    render(){
        {document.title ="Spotify - Login"}
    return(
        <div className="login-page">
            <div className="login-logo">
                <a className="spotify-login image" title="Spotify" href="/"></a>
                <div className="border-bottom mt-4"></div>
            </div>
                <div className="container login-content">
           
                    <p> <strong> To continue, log in to Spotify.</strong> </p>
                    {this.state.checkedCorrect == true ? <div className="incorrect align-items-center">Incorrect email or password.</div>:<div></div>}
                   
                    {/* <button id="login-facebook-button" className="btn rounded-pill text-center " >
                    <i className="fab fa-facebook"></i> continue with facebook </button>  */}
                    <div className=" d-flex align-items-center justify-content-center"> <LoginFacebook/> </div>
                    
                    <div className="border-divider">
                        <strong className="or-login">or</strong>
                    </div>
                    <form >
                    <div className="form-group">
                        <div style={{marginBottom: "15px"}}>
                            <input style={this.state.emailStyle} autoComplete="off" onChange={this.validateEmail} type="email" className="form-control" id="input-email" aria-describedby="emailHelp" placeholder="Email address" />
                            <div className="error-validate">{this.state.emailError}</div>
                        </div>
                        <input style={this.state.passwordStyle} onChange={this.validatePassword} type="password" className="form-control" id="input-password" placeholder="Password" />
                            <div  className="error-validate">{this.state.passwordError}</div>
                            <div className="form-check check-log">
                                <input  type="checkbox" className="form-check-input" id="checkbox"/>
                                <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                                <a onClick={this.handleLogIn} className="btn rounded-pill text-center login-button">Log In</a>
                            </div>
                        <div className="forget-pass d-flex justify-content-center">
                        <a href="/forget-password" className="col-xs-12 "> Forget Your Password? </a>
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

/** A function connecting component to redux store
 * @memberof Login
 * @param {*} dispatch 
 */
const mapDispatchToProps = dispatch => {
    return {
      onSignIn : (user) => dispatch ({type: actionTypes.ON_SIGNIN, payload: {user:user} }),
    };
  };
  
export default connect(null, mapDispatchToProps)(Login);