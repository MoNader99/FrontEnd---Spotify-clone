import React ,{ Component} from 'react';
import './SignUp.css';


export class SignUp extends Component{
  render() 
	{
    return(
      <div className="Sign-Up">

          <div className="container-fluid border-bottom content mb-5">
              <a href="/" className="Image container"></a> 
          </div>

          <div className="mb-3">
          <a className="sign-with-facebook btn rounded-pill text-center">SIGN UP WITH FACEBOOK</a>
          </div>

          <p className="or">or</p>
          <h2>Sign up with your email address</h2>

          <div className="container ">
            <form class="needs-validation" novalidate>
                <div class="form-group d-flex justify-content-center">
                  <input type="email" className="form-control" placeholder="Email"></input>
                </div>
                <div class="form-group d-flex justify-content-center">
                  <input type="email" className="form-control" placeholder="Confirm Email"></input>
                </div>
                <div class="form-group d-flex justify-content-center">
                  <input type="password" className="form-control" placeholder="Password"></input>
                </div>
                <div class="form-group d-flex justify-content-center">
                  <input type="text" className="form-control" placeholder="What should we call you ?"></input>
                </div>

                <div className="d-flex justify-content-center" >
                <select class="custom-select months " placeholder="What should we call you ?">
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
                <input type="text" className="form-control days" placeholder="Day"></input>
                <input type="text" className="form-control year" placeholder="year"></input>
                </div>

                <div className="mt-3 ">
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input"></input>
                    <label class="custom-control-label" for="customRadioInline1">Male</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input"></input>
                    <label class="custom-control-label" for="customRadioInline2">Female</label>
                  </div>
                  <div class="custom-control custom-radio custom-control-inline">
                    <input type="radio" id="customRadioInline3" name="customRadioInline1" class="custom-control-input"></input>
                    <label class="custom-control-label" for="customRadioInline3">Non-Binary</label>
                  </div>
                </div>

                <div className="terms-and-conditions mt-3 ">
                  <p className="mb-3">By clicking on Sign up, you agree to Spotify's<a className="green" href="/"> Terms and Conditions of Use</a>.</p>
                  <p className="mb-3">To learn more about how Spotify collects, uses, shares and protects your personal data please read Spotify's<a className="green" href=""> Privacy Policy</a>.</p>
                </div>

                <a type="submit" className="submit btn rounded-pill text-center mb-3">SIGN UP</a>
                <p style={{'font-size' :'0.75em', 'font-weight': '400'}}>Already have an account? <a className="green" href="/logIn">Log in</a></p>
            </form>
          </div>

      </div>
    );
  }
};

export default  SignUp;

