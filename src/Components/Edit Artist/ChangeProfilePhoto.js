import React,{ Component }from "react";
import './ChangeProfilePhoto.css';
import Image from './Image'
import {connect} from 'react-redux';

import { withRouter } from 'react-router-dom';
import * as actionTypes from '../../Store/actions';
/** Class ChangeProfilePhoto 
 * @category Edit Artist
 * @extends Component
 */

class ChangeProfilePhoto extends Component{
        constructor(props){

                super(props)
                this.state={
         /**data of the profile photo
        * @memberof ChangeProfilePhoto
        * @type {string}
        */
                        selectedFile: null,
                        imagePreviewUrl: null
                        
                }
                this.onImageChange=this.onImageChange.bind(this)
        }
        /**Function the profile image change
   * @memberof ChangeProfilePhoto
   * @func onImageChange
   */
        onImageChange= event=> {
        
                        let reader = new FileReader();
                        
                        
                        
                        reader.onloadend = () => {
                        this.props.onSelect(reader.result)
                          this.setState({
                            imagePreviewUrl: reader.result
                          });
                        }
                         reader.readAsDataURL(event.target.files[0])
                         
                       
                        
                        
                         
                     
                      }
                
render (){
        return(

<div className="SetPasswordContent">
   <div className="container" >
   
        <h1 className="header">Change Your Profile Picture</h1>
<div id= "cont">
        <div className="custom-file-artist-photo  ">
                                            <input type="file" onChange={this.onImageChange} className="custom-file-input" id="group_image" accept="image/*" />
                                            <label className="custom-file-label" htmlFor="customFile"></label>
                                            <small className="form-text text-muted">Upload Your Profile Photo</small>
                                        </div> 
        
   </div>
</div>
</div>

)}};




       const mapDispatchToProps = dispatch => {
        return {
        onSelect : (url) => dispatch ({type: actionTypes.SELECT_PHOTO , value: url})
        };
      };

export default connect(null,mapDispatchToProps) (withRouter(ChangeProfilePhoto));



