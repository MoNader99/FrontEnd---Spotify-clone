import React ,{ Component }from 'react';
import Chart from 'chart.js';
import SideBar from '../SideBar/ArtistSidebar';
import './ArtistProfile.css'
import axios from 'axios'
import $ from 'jquery';
import { MainNavbar } from '../../WelcomeRelated/MainNavbar';
import Bottom from '../../WelcomeRelated/Bottom';

var ctxLOne;
var ctxLTwo;
var ctxLThree;
var ctxLFour
var myLineChartListeners;
var myLineChartLikes;
var myBarChartTopSongs;
var myBarChartTopAlbums;

class Audience extends Component {
    constructor() {
        super()
        this.state = {
            listeners:{
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: "Listeners",
                        data: [],
                        borderColor:'green',
                        borderWidth: 2,
                        backgroundColor: 'rgba(29, 185, 84, 0.1)',
                        pointBackgroundColor: 'black',
                        pointBorderColor: 'black'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "#FFF",
                            }
                        }],
                    }
                }
            },
            likes:{
                type: 'line',
                data: {
                    labels: [],
                    datasets: [{
                        label: "Likes",
                        data: [],
                        borderColor:'green',
                        borderWidth: 2,
                        backgroundColor: 'rgba(29, 185, 84, 0.1)',
                        pointBackgroundColor: 'black',
                        pointBorderColor: 'black'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "#FFF",
                            }
                        }],
                    }
                }
            },
            topSongs:{
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [{
                        label: "Listeners",
                        backgroundColor: "rgba(29, 185, 84, 0.7)",
                        data: []
                    }, {
                        label: "Likes",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        data: []
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "#FFF",
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                    }
                }
            },
            topAlbums:{
                type: 'bar',
                data: {
                    labels: [],
                    datasets: [{
                        label: "Listeners",
                        backgroundColor: "rgba(29, 185, 84, 0.7)",
                        data: []
                    }, {
                        label: "Likes",
                        backgroundColor: "rgba(0, 0, 0, 0.7)",
                        data: []
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: "#FFF",
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                            }
                        }]
                    }
                }
            },
            listenersPerDay:[],
            listenersPerMonth:[],
            listenersPerYear:[],
            likesPerDay:[],
            likesPerMonth:[],
            likesPerYear:[],
            dayLabels:[],
            monthLabels:[],
            yearLabels:[],
            albumLabels:[],
            albumLikes:[],
            albumListeners:[],
            songLabels:[],
            songLikes:[],
            songListeners:[],
        }
        this.changeListenersGraph=this.changeListenersGraph.bind(this)
        this.changeLikesGraph=this.changeLikesGraph.bind(this)
    }

    componentDidMount(){
        axios.get("http://spotify-clone1.mocklab.io"+"/artist/statistics",{
            headers: {
                'authorization': "Bearer "
            },
        })
            .then(res => {
                if(res.status === 200)
                {
                   this.setState({
                        listenersPerYear: res.data.years.followers.data,
                        likesPerYear: res.data.years.likes.data,
                        yearLabels: res.data.years.labels,
                        listenersPerMonth: res.data.months.followers.data,
                        likesPerMonth: res.data.months.likes.data,
                        monthLabels: res.data.months.labels,
                        listenersPerDay: res.data.days.followers.data,
                        likesPerDay: res.data.days.likes.data,
                        dayLabels: res.data.days.labels,
                        albumLabels:res.data.albums.labels,
                        albumLikes:res.data.albums.likes.data,
                        albumListeners:res.data.albums.followers.data,
                        songLabels:res.data.songs.labels,
                        songLikes:res.data.songs.likes.data,
                        songListeners:res.data.songs.followers.data,
                    })
                    var dummyState = {...this.state.topSongs};
                    dummyState.data.labels=res.data.songs.labels;
                    dummyState.data.datasets[0].data=res.data.songs.followers.data;
                    dummyState.data.datasets[1].data=res.data.songs.likes.data;
                    var dummyStateTwo = {...this.state.topAlbums};
                    dummyStateTwo.data.labels=res.data.albums.labels;
                    dummyStateTwo.data.datasets[0].data=res.data.albums.followers.data;
                    dummyStateTwo.data.datasets[1].data=res.data.albums.likes.data;
                    var dummyStateThree = {...this.state.listeners};
                    dummyStateThree.data.labels=res.data.months.labels;
                    dummyStateThree.data.datasets[0].data=res.data.months.followers.data;
                    var dummyStateFour = {...this.state.likes};
                    dummyStateFour.data.labels=res.data.months.labels;
                    dummyStateFour.data.datasets[0].data=res.data.months.likes.data;
                    this.setState({
                        topSongs: dummyState,
                        topAlbums: dummyStateTwo,
                        listeners: dummyStateThree,
                        likes: dummyStateFour,
                    }, function () {
                        ctxLOne = document.getElementById("line-chart-listeners").getContext('2d');
                        myLineChartListeners = new Chart(ctxLOne, this.state.listeners);
                        ctxLTwo = document.getElementById("line-chart-likes").getContext('2d');
                        myLineChartLikes = new Chart(ctxLTwo, this.state.likes);
                        ctxLThree = document.getElementById("bar-chart-top-songs").getContext('2d');
                        myBarChartTopSongs = new Chart(ctxLThree, this.state.topSongs);
                        ctxLFour = document.getElementById("bar-chart-top-albums").getContext('2d');
                        myBarChartTopAlbums = new Chart(ctxLFour, this.state.topAlbums);
                    })
                }
            })
    }
    
    changeListenersGraph(e){
        if(e.target.value == "daily") {
            var dummyState = {...this.state.listeners}
            dummyState.data.labels=this.state.dayLabels
            dummyState.data.datasets[0].data=this.state.listenersPerDay
            this.setState({listeners: dummyState})
            var pos = $(document).scrollTop();
            myLineChartListeners.destroy();
            myLineChartListeners = new Chart(ctxLOne, this.state.listeners);
            $(document).scrollTop(pos);
        }
        else if(e.target.value == "yearly") {
            var dummyState = {...this.state.listeners}
            dummyState.data.labels=this.state.yearLabels
            dummyState.data.datasets[0].data=this.state.listenersPerYear
            this.setState({listeners: dummyState})
            var pos = $(document).scrollTop();
            myLineChartListeners.destroy();
            myLineChartListeners = new Chart(ctxLOne, this.state.listeners);
            $(document).scrollTop(pos);
        }
        else if(e.target.value == "monthly") {
            var dummyState = {...this.state.listeners}
            dummyState.data.labels=this.state.monthLabels
            dummyState.data.datasets[0].data=this.state.listenersPerMonth
            this.setState({listeners: dummyState})
            var pos = $(document).scrollTop();
            myLineChartListeners.destroy();
            myLineChartListeners = new Chart(ctxLOne, this.state.listeners);
            $(document).scrollTop(pos);
        }
    };

    changeLikesGraph(e){
        if(e.target.value == "daily") {
            var dummyState = {...this.state.likes}
            dummyState.data.labels=this.state.dayLabels
            dummyState.data.datasets[0].data=this.state.likesPerDay
            this.setState({likes: dummyState})
            var pos = $(document).scrollTop();
            myLineChartLikes.destroy();
            myLineChartLikes = new Chart(ctxLTwo, this.state.likes);
            $(document).scrollTop(pos);
        }
        else if(e.target.value == "yearly") {
            var dummyState = {...this.state.likes}
            dummyState.data.labels=this.state.yearLabels
            dummyState.data.datasets[0].data=this.state.likesPerYear
            this.setState({likes: dummyState})
            var pos = $(document).scrollTop();
            myLineChartLikes.destroy();
            myLineChartLikes = new Chart(ctxLTwo, this.state.likes);
            $(document).scrollTop(pos);
        }
        else if(e.target.value == "monthly") {
            var dummyState = {...this.state.likes}
            dummyState.data.labels=this.state.monthLabels
            dummyState.data.datasets[0].data=this.state.likesPerMonth
            this.setState({likes: dummyState})
            var pos = $(document).scrollTop();
            myLineChartLikes.destroy();
            myLineChartLikes = new Chart(ctxLTwo, this.state.likes);
            $(document).scrollTop(pos);
        }
    };

    render()
    {
        {document.title ="Audience - Spotify"}

        return(  
            <div className="artist-page">
                <MainNavbar color="black"/>
            <div className="background-color">

                <div id="artist-audience" className="container"> 
                    <div className="row">
                        <SideBar/>
                        <div className="col-lg-9 col-sm-12 statistics-section">
                            <div className="statistics-div">
                                <h1 className="page-header">Audience</h1>
                                <div className="statistics-info listeners">
                                    <select name="chartType" id="chartType" onChange={this.changeListenersGraph} >
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                        <option value="daily">Daily</option>
                                    </select>
                                    <label className="labels">Listeners</label>
                                    <canvas id="line-chart-listeners"></canvas>
                                </div>
                                <div className="statistics-info likes">
                                    <select name="chartType" id="chartType" onChange={this.changeLikesGraph} >
                                        <option value="monthly">Monthly</option>
                                        <option value="yearly">Yearly</option>
                                        <option value="daily">Daily</option>
                                    </select>
                                    <label className="labels">Likes</label>
                                    <canvas id="line-chart-likes"></canvas>
                                </div>
                                <div className="statistics-info top-songs">
                                    <label className="labels">Top Songs</label>
                                    <canvas id="bar-chart-top-songs"></canvas>
                                </div>
                                <div className="statistics-info top-albums">
                                    <label className="labels">Top Albums</label>
                                    <canvas id="bar-chart-top-albums"></canvas>
                                </div>
                            </div>
                        </div>  
                    </div> 
                </div>  
            </div> 
            <Bottom/>
            </div>                                       
        )
    }
}

export default Audience;