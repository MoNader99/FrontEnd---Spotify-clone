import React, {Component} from 'react';
import './RecommendArtists.css';
import {Redirect} from 'react-router-dom'
import CardList from './RecommendedList'
import {ArtistsData} from './ArtistData'
class Recommend extends Component{
    constructor(props){
        super(props)
        this.state={
           list:ArtistsData,
           Submitted:false
        }
        console.log(this.state.list[7].name)
    }
    SubmitArtists(){
        console.log('func called')
    }

    render(){
        if(this.state.Submitted){return<Redirect to='../webplayer/home'></Redirect>}
        return(
        <div className='first-home tc'> 
                <h1 className='first-h1'> Choose 3 or more artists you like. </h1>
                <button onClick={()=>this.SubmitArtists()} className='btn btn-succes mb4'>Submit</button>
                <CardList List={this.state.list}></CardList>
        </div>
        )

    }

}

export default Recommend