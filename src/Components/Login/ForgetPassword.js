import React ,{ Component} from 'react';
import './ForgetPassword.css'
import { BASEURL } from '../../Constants/BaseURL';
import { Link } from 'react-router-dom';

/** Class ForgetPassword 
 * @category ForgetPassword
 * @extends Component
 */
class ForgetPassword extends Component
{
    state =
    {
        /**variable of email to check its validation
        * @memberof ForgetPassword
        * @type {string}
        */
        EmailText:"",

        /**Style of email error
        * @memberof ForgetPassword
        * @type {object}
        */
        ErrorStyle:{},

        /**Error message that will be shown to user
        * @memberof ForgetPassword
        * @type {string}
        */
        ErrorMsg:"",

        /**Check correct of the email
        * @memberof ForgetPassword
        * @type {boolean}
        */
        CorrectEmail:false
    }

    /**Function to Validate email
    * @memberof ForgetPassword
    * @func onChangeEmail
    * @param event
    */
    onChangeEmail = (event) =>
    {
        /**Email text got from the user input
        * @memberof ForgetPassword
        * @type {string}
        */
        var EmailText = event.target.value
        if (!EmailText.includes("@") || EmailText.includes(" "))
        {
            if (EmailText==""){
                this.setState({
                    ErrorMsg: "You need to enter your email.",
                    ErrorStyle:{'border': '1px solid red'},
                  CorrectEmail:false,
              })
              }
              else{
                this.setState({
                    ErrorMsg: "This email is invalid. Make sure it's written like example@email.com",
                    ErrorStyle:{'border': '1px solid red'},
                  CorrectEmail:false,
              })
              }
        }
        else
        {
            if(EmailText=="@"){
            this.setState({
                ErrorMsg: "@ only is not enough",
                ErrorStyle:{'border': '1px solid red'},
                CorrectEmail:false,
            })
            }
            else{
            this.setState({
                ErrorStyle:{},
                ErrorMsg:null,
                EmailText:EmailText,
                CorrectEmail:true,
            })
            }
  }
    }

    /**Function to Reset Password
    * @memberof ForgetPassword
    * @func ResetPassword
    */
    ResetPassword =() =>
    {
        if(this.state.CorrectEmail==true)
        {

        /**Email that user write 
        * @memberof ForgetPassword
        * @type {string}
        */
        var inputEmail = document.getElementById('email-reset-password').value;
         /** A variable that contains URL 
          * @memberof ForgetPassword
          * @type {string}
          */
         var url =  BASEURL+"/forget-password";    
         const requestOptions = {
           method: 'POST', 
           headers: {'Content-Type': 'application/json' }, 
           body: JSON.stringify({ email: inputEmail}) ,
       
         };    
            fetch(url,requestOptions)
             .then((res) => {
               if(res.status===200){
                  console.log("response is ok")
               }
          })
         
        .then((data) =>{})
        .catch((err)=>console.log(err))
        }
    }

    render(){
        {document.title ="Spotify - Forget Password"}
        return(
            <div className="forget-password">
               <nav className="navbar navbar-expand-md navbar-dark ground">
               <div className="container">
               <Link to="/" className="navbar-brand logo-top" > <i className="fab fa-spotify"></i> Spotify </Link>
            </div>
               </nav>
               <div className="container content">

          <h1> Password Reset</h1>
            <p>Enter your <strong>Spotify email address </strong> that you used to register. We'll send you an email<br/> with your username and a link to reset your password.</p>

            <label for="email-reset-password">Email address</label>
            <input style={this.state.ErrorStyle} onChange={this.onChangeEmail} id="email-reset-password" autoComplete="off" onfocus="this.value=''" type="email" className="form-control" required="required" data-msg-required="This field is required"/>

            <div className="error-validate">{this.state.ErrorMsg}</div>

            <button onClick={this.ResetPassword} type="submit" className="btn btn-success rounded-pill text-center d-flex justify-content-center">Send</button>

           </div>

           <footer className="bottom-bar-passowrd page-footer pb-2 fixed-bottom footer navbar-fixed-bottom ">
			  <div className=" container">
				<div className="row"> 
                <div className="col-9">
                    <br/>
			<a href="/aboutus" className="links-hover"> About Us </a>
            </div>
            <div className="col-3">
			  <div className=" language d-flex justify-content-end py-2">
				  Egypt (English)
			  <img src="https://masthead.scdn.co/065b62cfb94f49960e7c37413175e2bb/flags/eg.svg" alt="" className="img-size"></img>
			  </div>
              <div className="d-flex justify-content-end">© 2020 Spotify AB</div>
              </div>
              </div>
              </div>
              </footer>

            </div>
        )
    }
}
export default ForgetPassword