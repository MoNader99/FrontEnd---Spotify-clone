import React, { Component } from 'react';
import "./CardMedia.css";

/** Class CardMedia 
 * @category CardMedia
 * @extends Component
 */
class CardMedia extends Component {
  constructor(props){
    super(props);
    this.state = 
    {
  
    /** playing button
   * @memberof CardMedia
   * @type {boolean}
   */
      playing: false,
    }
  }

  render(){
    var PlayPause = this.state.playing ? <i className="far fa-pause-circle"></i> : <i className="far fa-play-circle"></i>;
    return (
      <div className="play-pause">

        <div className="container">
          <img src= {this.props.image} className="card-image" alt=""></img>
          <div className="middle">
            <div onClick={(event) => {
                this.setState((prevstate, event) => ({ playing: prevstate.playing ? false : true }))
                }}> {PlayPause} </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CardMedia;