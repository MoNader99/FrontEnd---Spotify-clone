import React ,{ Component} from 'react';
import'./ShareSong.css';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    TelegramShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    
  } from "react-share";
  
  import {
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,

  } from "react-share";
import { connect } from 'react-redux';
//------------------------------------------------------------------------------------------------------------------//

/** Class ShareSong 
 * @category ShareSong
 * @extends Component
 */
export class ShareSong extends Component{
  constructor(props){
    super(props);
  }

render(){
  /** A variable that contains URL of the selected song 
   * @memberof ShareSong
   * @type {string}
   */
  if(this.props.songURL != null)
  {
      var song={songURL:this.props.songURL.songURL}
  }
  else
  {
    var song={songURL:""}
  }
  return(
<div className="share-song ">
<div id="share-song" className="modal fade" role="dialog">
<div className="modal-dialog modal-xl  ">
<div className="modal-content">

        <button className="btn close-button" data-dismiss="modal"> <i className="fas fa-times"></i> </button>
        
            <h2 className="d-flex justify-content-center mb-5" >Share Song URL With: </h2>
        
            <div className=" container d-flex justify-content-around mb-5">
                <FacebookShareButton
                url={song.songURL}
                quote="Listen to this Song :)"
                className="social"
                >
                <FacebookIcon size={50} round />
                </FacebookShareButton>

                <TwitterShareButton
                url={song.songURL}
                quote="Listen to this Song :)"
                className="social"
                >
                <TwitterIcon size={50} round />
                </TwitterShareButton>

                <LinkedinShareButton
                url={song.songURL}
                quote="Listen to this Song :)"
                className="social"
                >
                <LinkedinIcon size={50} round />
                </LinkedinShareButton>

                <WhatsappShareButton
                url={song.songURL}
                quote="Listen to this Song :)"
                className="social"
                >
                <WhatsappIcon size={50} round />
                </WhatsappShareButton>


                <EmailShareButton
                url={song.songURL}
                quote="Listen to this Song :)"
                className="social"
                >
                <EmailIcon size={50} round />
                </EmailShareButton>

                <TelegramShareButton
                url={song.songURL}
                quote="Listen to this Song :)"
                className="social"
                >
                <TelegramIcon size={50} round />
                </TelegramShareButton>

            </div>

       
          <div className="container ">
            <h6 className="ml-2"> OR Copy Link </h6>
            </div>

            <div  className="container d-flex justify-content-center mb-4">
                <input type="text" value={song.songURL} class="field left" readonly disabled></input>
                <CopyToClipboard text={song.songURL}>
                    <span  title="Copy link" className="copy-link"><i class="far fa-copy"></i></span>
                </CopyToClipboard>
            </div>
            
            </div>
        </div>
        </div>
        </div>    
  )
}
}

/**A function connecting component to redux store
 * @memberof ShareSong
 * @func mapStateToProps
 * @param {*} state
 */
const mapStateToProps = state =>{
  return{
    songURL: state.selectedSong
  };
};

export default connect(mapStateToProps) (ShareSong);