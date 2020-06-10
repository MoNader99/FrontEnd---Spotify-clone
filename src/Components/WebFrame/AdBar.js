import React from 'react'
import otlob from './otlob.jpg'
import souq from './souq.jpg'
import uber from './uber.jpg'
const AdBar = ()=>{
    return(
        // <div id="demo" class="carousel slide" data-ride="carousel">
        //     <ul class="carousel-indicators">
        //         <li data-target="#demo" data-slide-to="0" class="active"></li>
        //         <li data-target="#demo" data-slide-to="1"></li>
        //         <li data-target="#demo" data-slide-to="2"></li>
        //     </ul>
        //     <div class="carousel-inner">
        //     <img src={otlob} alt="Los Angeles">
        //     </img>
        //     </div>

        //     <div class="carousel-item">
        //     <img src={souq} alt="Chicago">
        //     </img>
        //     </div>

        //     <div class="carousel-item">
        //     <img src={uber} alt="New York"></img>
        //     </div>

        //     <a class="carousel-control-prev" href="#demo" data-slide="prev">
        //         <span class="carousel-control-prev-icon"></span>
        //     </a>
        //     <a class="carousel-control-next" href="#demo" data-slide="next">
        //         <span class="carousel-control-next-icon"></span>
        //     </a>
        // </div>
        <div id="carouselExampleControls" class="carousel slide ml2" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100"  height='90' src={otlob} alt="First slide"></img>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100"  height='90' src={souq} alt="Second slide"></img>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100"  height='90' src={uber} alt="Third slide"></img>
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        </div>

    )
}

export default AdBar