import React, { Component } from 'react'
import InfoLine from './InfoLine'

import ReactDOM from 'react-dom';
var check
const $ = window.$;


const Data = ({ Country,email,username,fname,lname }) =>{


        return(

       <div className="w-dyn-item" >
           
        <InfoLine title="Country" info={Country}/>
        <InfoLine title="Email" info={email}/>
        <InfoLine title="Artist Name" info={username}/>
        <InfoLine title="First Name" info={fname}/>
        <InfoLine title="Last Name" info={lname}/>
 
      </div>
        );
    
}
export default Data;