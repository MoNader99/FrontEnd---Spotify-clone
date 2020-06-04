import React ,{ Component} from 'react';
import './SignUp.css';

/** Class SignUp 
 * @category SignUp
 * @extends Component
 */
export class SignUp extends Component{
  state = {

    /**email error text 
    * @memberof SignUp
    * @type {string}
    */
    emailError:"",

    /**confirm email error text
    * @memberof SignUp
    * @type {string}
    */
    comfirmEmailError:"",

    /**password error text
    * @memberof SignUp
    * @type {string}
    */
    passwordError:"",

    /**username error text 
    * @memberof SignUp
    * @type {string}
    */
    usernameError:"",

    /**year error  
    * @memberof SignUp
    * @type {string}
    */
    yearError:"",

    /**days error
    * @memberof SignUp
    * @type {string}
    */
    daysError:"",


    /**chech whether user inputs are correct or not 
    * @memberof SignUp
    * @type {boolean}
    */
    checkedCorrect: false,

    /**wrong style of email 
    * @memberof SignUp
    * @type {object}
    */
    wrongStyleEmail:{},

    /**wrong style of confirmation email 
    * @memberof SignUp
    * @type {object}
    */
    wrongStyleConfirmEmail:{},

    /**wrong style of password 
    * @memberof SignUp
    * @type {object}
    */
    wrongStylePassword:{},

    /**wrong style of username 
    * @memberof SignUp
    * @type {object}
    */
    wrongStyleUsername:{},

    /**wrong style of years
    * @memberof SignUp
    * @type {object}
    */
    wrongStyleYear:{},

    /**wrong style of days
    * @memberof SignUp
    * @type {object}
    */
    wrongStyleDay:{},

    /**Email text 
    * @memberof SignUp
    * @type {string}
    */
    EmailText:"",

    /**check email validation
    * @memberof SignUp
    * @type {boolean}
    */
    CorrectEmail:false,

    /**check confirm email validation 
    * @memberof SignUp
    * @type {boolean}
    */
    CorrectConfirmEmail:false,

    /**check password validation 
    * @memberof SignUp
    * @type {boolean}
    */
    CorrectPassword:false,

    /**check username validation  
    * @memberof SignUp
    * @type {boolean}
    */
    CorrectUsername:false,

    /**check days validation  
    * @memberof SignUp
    * @type {boolean}
    */
    CorrectDays:false,

    /**check years validation  
    * @memberof SignUp
    * @type {boolean}
    */
    Correctyears:false,
    
}

 /**Function to Validate email
 * @memberof SignUp
 * @func validateEmail
 * @param event
 */
validateEmail = (event) => {
  let EmailText = event.target.value;

  if (!EmailText.includes("@") || EmailText.includes(" "))
  {
    if (EmailText==""){
      this.setState({
        emailError: "You need to enter your email.",
        wrongStyleEmail:{'border': '1px solid red'},
        CorrectEmail:false,
    })
    }
    else{
      this.setState({
        emailError: "This email is invalid. Make sure it's written like example@email.com",
        wrongStyleEmail:{'border': '1px solid red'},
        CorrectEmail:false,
    })
    }
  }

  else
  {
    if(EmailText=="@"){
      this.setState({
        emailError: "@ only is not enough",
        wrongStyleEmail:{'border': '1px solid red'},
        CorrectEmail:false,
    })
    }
    else{
      this.setState({
        wrongStyleEmail:{},
        emailError:null,
        EmailText:EmailText,
        CorrectEmail:true,
      })
    }
  }
}

/**Function to Validate confirmation email
 * @memberof SignUp
 * @func validateConfirmEmail
 * @param event
 */
validateConfirmEmail = (event) => {
  let ConfirmEmailText = event.target.value;
  if(this.state.CorrectEmail){
    if(ConfirmEmailText!=this.state.EmailText){
      if(ConfirmEmailText==""){
        this.setState({
          comfirmEmailError: "You need to confirm your email.",
          wrongStyleConfirmEmail:{'border': '1px solid red'},
          CorrectConfirmEmail:false,
      })
      }
      else{
      this.setState({
        comfirmEmailError: "The email addresses don't match.",
        wrongStyleConfirmEmail:{'border': '1px solid red'},
        CorrectConfirmEmail:false,
    })
    }

    }
    else{
      this.setState({
        comfirmEmailError: "",
        wrongStyleConfirmEmail:{},
        CorrectConfirmEmail:true,
    })
    }
  }
}

/**Function to Validate Password
 * @memberof SignUp
 * @func validatePassword
 * @param event
 */
validatePassword = (event) => {
  let PasswordText = event.target.value;

  if(PasswordText.length<=6 && PasswordText.length>=1){
    this.setState({
      passwordError: "Your password is too short.",
      wrongStylePassword:{'border': '1px solid red'},
      CorrectPassword:false,
  })
  }
  else if (PasswordText==""){
    this.setState({
      passwordError: "You need to enter a password.",
      wrongStylePassword:{'border': '1px solid red'},
      CorrectPassword:false,
  })
  }
  else {
    this.setState({
      passwordError: "",
      wrongStylePassword:{},
      CorrectPassword:true,
  })
  }
}

/**Function to Validate Username
 * @memberof SignUp
 * @func validateUsername
 * @param event
 */
validateUsername=(event)=>{
  let UsernameText = event.target.value;

  if (UsernameText==""){
    this.setState({
      usernameError: "Enter a name for your profile.",
      wrongStyleUsername:{'border': '1px solid red'},
      CorrectUsername:false,
  })
  }
  else{
    this.setState({
      usernameError: "",
      wrongStyleUsername:{},
      CorrectUsername:true,
  })
  }
}

/**Function to Validate days number
 * @memberof SignUp
 * @func validateDays
 * @param event
 */
validateDays=(event)=>{
  let days= event.target.value;
  days=Number(days)
  if(days<=0 || days>31 || isNaN(days)){
    this.setState({
      daysError: "Enter a valid day of the month.",
      wrongStyleDay:{'border': '1px solid red'},
      CorrectDays:false,
  })
  }
  else{
    this.setState({
      daysError: "",
      wrongStyleDay:{},
      CorrectDays:true,
  })
  }
}

/**Function to Validate years number
 * @memberof SignUp
 * @func validateYears
 * @param event
 */
validateYears=(event)=>{
  let years= event.target.value;
  years=Number(years)
  if(years<1990 || years>2002 || isNaN(years)){
    this.setState({
      yearError: "Enter a valid year.",
      wrongStyleYear:{'border': '1px solid red'},
      Correctyears:false,
  })
  }
  else{
    this.setState({
      yearError: "",
      wrongStyleYear:{},
      Correctyears:true,
  })
  }
}

/**Function to handle signup button
 * @memberof SignUp
 * @func handleSingUp
 * @param event
 */
handleSingUp=(event)=>{
  if(this.state.CorrectEmail==true && 
    this.state.CorrectConfirmEmail==true && 
    this.state.CorrectPassword==true && 
    this.state.CorrectUsername==true && 
    this.state.Correctyears==true && 
    this.state.CorrectDays==true)
    
    {
    this.setState({checkedCorrect:false})
    window.location.replace("/account-overview");
    }
    
  else{
    this.setState({checkedCorrect:true})
  }
}


  render() 
	{
    return(
      <div className="Sign-Up">

          <div className="container-fluid border-bottom content mb-5">
              <a href="/" className="Image container"></a> 
          </div>

        
          <div className="container ">
          <div className="mb-3 d-flex justify-content-center">
          <button id="login-facebook-button" className="btn rounded-pill text-center " >
                    <i className="fab fa-facebook"></i> continue with facebook </button> 
          </div>

          <div className="d-flex justify-content-center"><p className="or">or</p></div>
          <div className="d-flex justify-content-center"><h2 >Sign up with your email address</h2></div>

          {this.state.checkedCorrect == true ? <div className="d-flex justify-content-center" > <div className="incorrect ">Please fill all inputs in the correct way.</div> </div>:<div></div>}
            <form class="needs-validation" novalidate>
                <div class="form-group d-flex justify-content-center">
                  <input type="email" style={this.state.wrongStyleEmail} className="form-control" onChange={this.validateEmail} placeholder="Email"></input>
                </div>
                <div className="error-validate">{this.state.emailError}</div>

                <div class="form-group d-flex justify-content-center">
                  <input type="email" style={this.state.wrongStyleConfirmEmail} className="form-control" onBlur={this.validateConfirmEmail} placeholder="Confirm Email"></input>
                </div>
                <div className="error-validate">{this.state.comfirmEmailError}</div>

                <div class="form-group d-flex justify-content-center">
                  <input type="password" style={this.state.wrongStylePassword} className="form-control" onChange={this.validatePassword} placeholder="Password"></input>
                </div> 
                <div className="error-validate">{this.state.passwordError}</div>

                <div class="form-group d-flex justify-content-center">
                  <input type="text" style={this.state.wrongStyleUsername} className="form-control" onChange={this.validateUsername} placeholder="What should we call you ?"></input>
                </div>
                <div className="error-validate">{this.state.usernameError}</div>


                <div className="mb-3 d-flex justify-content-center" >
                <select class="custom-select months " >
                      <option value=""> Month </option>
                      <option value="01"> January </option>
                      <option value="02"> February </option>
                      <option value="03"> March </option>
                      <option value="04"> April </option>
                      <option value="05"> May </option>
                      <option value="06"> June </option>
                      <option value="07"> July </option>
                      <option value="08"> August </option>
                      <option value="09"> September </option>
                      <option value="10"> October </option>
                      <option value="11"> November </option>
                      <option value="12"> December </option>
                </select>
                <input type="text" style={this.state.wrongStyleDay} onChange={this.validateDays} className="form-control days" placeholder="Day"></input>
                <input type="text" style={this.state.wrongStyleYear} onChange={this.validateYears} className="form-control year" placeholder="year"></input>
                </div>
                <div className="error-validate">{this.state.yearError}</div>
                <div className="error-validate">{this.state.daysError}</div>

                <div className="mt-3 d-flex justify-content-center">
                <select class="custom-select months " >
                      <option value="Male"> Male </option>
                      <option value="Female"> Female </option>
                      <option value="Non-Binary"> Non-binary </option>
                </select>
                </div>

                <div className="terms-and-conditions mt-3 ">
                  <p className="mb-3">By clicking on Sign up, you agree to Spotify's<a className="green" href="/"> Terms and Conditions of Use</a>.</p>
                  <p className="mb-3">To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's<a className="green" href="/privacypolicy"> Privacy Policy</a>.</p>
                </div>

                <div className="d-flex justify-content-center"><a onClick={this.handleSingUp} type="submit" className="submit btn rounded-pill text-center  mb-3">SIGN UP</a></div>
                <p  style={{'font-size' :'0.75em', 'font-weight': '400'}}>Already have an account? <a className="green" href="/logIn">Log in</a></p>
            </form>
          </div>

      </div>
    );
  }
};

export default  SignUp;

