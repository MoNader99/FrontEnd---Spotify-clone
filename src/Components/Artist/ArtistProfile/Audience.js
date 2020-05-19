import React ,{ Component }from 'react';
import Chart from 'chart.js';
import SideBar from '../SideBar/ArtistSidebar';
import './ArtistProfile.css'

var ctxLOne;
var ctxLTwo;
var myLineChartListeners;
var myLineChartLikes;

class Audience extends Component {
    constructor() {
        super()
        this.state = {
            listeners:{
                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "September", "October", "Novmber", "December"],
                    datasets: [{
                        label: "Number of listeners per month",
                        data: [65, 59, 80, 81, 56, 55, 52, 71, 58, 90, 76, 89],
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
                    labels: ["January", "February", "March", "April", "May", "June", "July", "September", "October", "Novmber", "December"],
                    datasets: [{
                        label: "Number of likes per month",
                        data: [25, 24, 26, 19, 29, 28, 30, 27, 24, 22, 31, 28],
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
            }
        }
        this.changeListenersGraph=this.changeListenersGraph.bind(this)
        this.changeLikesGraph=this.changeLikesGraph.bind(this)

    }
    componentDidMount(){
        ctxLOne = document.getElementById("line-chart-listeners").getContext('2d');
        myLineChartListeners = new Chart(ctxLOne, this.state.listeners);
        ctxLTwo = document.getElementById("line-chart-likes").getContext('2d');
        myLineChartLikes = new Chart(ctxLTwo, this.state.likes);
    }

    changeListenersGraph(e){
        if(e.target.value == "daily") {
            var dummyState = {...this.state.listeners}
            dummyState.data.datasets[0].label="Number of listeners per day"
            dummyState.data.labels=["1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12"]
            dummyState.data.datasets[0].data=[5, 7, 8, 8, 5, 3, 5, 7, 6, 10, 7, 8]
            this.setState({listeners: dummyState})
            myLineChartListeners.destroy();
            myLineChartListeners = new Chart(ctxLOne, this.state.listeners);
        }
        else if(e.target.value == "yearly") {
            var dummyState = {...this.state.listeners}
            dummyState.data.datasets[0].label="Number of listeners per year"
            dummyState.data.labels=["2016", "2017", "2018", "2019", "2020"]
            dummyState.data.datasets[0].data=[1253, 1432, 1245, 1563, 1500]
            this.setState({listeners: dummyState})
            myLineChartListeners.destroy();
            myLineChartListeners = new Chart(ctxLOne, this.state.listeners);
        }
        else if(e.target.value == "monthly") {
            var dummyState = {...this.state.listeners}
            dummyState.data.datasets[0].label="Number of listeners per month"
            dummyState.data.labels=["January", "February", "March", "April", "May", "June", "July", "September", "October", "Novmber", "December"]
            dummyState.data.datasets[0].data=[65, 59, 80, 81, 56, 55, 52, 71, 58, 90, 76, 89]
            this.setState({listeners: dummyState})
            myLineChartListeners.destroy();
            myLineChartListeners = new Chart(ctxLOne, this.state.listeners);
        }
        console.log(this.state)
    };

    changeLikesGraph(e){
        if(e.target.value == "daily") {
            var dummyState = {...this.state.likes}
            dummyState.data.datasets[0].label="Number of likes per day"
            dummyState.data.labels=["1", "2", "3", "4", "5", "6", "7", "8", "10", "11", "12"]
            dummyState.data.datasets[0].data=[2, 3, 1, 0, 3, 4, 2, 0, 1, 2, 1, 3]
            this.setState({likes: dummyState})
            myLineChartLikes.destroy();
            myLineChartLikes = new Chart(ctxLTwo, this.state.likes);
        }
        else if(e.target.value == "yearly") {
            var dummyState = {...this.state.likes}
            dummyState.data.datasets[0].label="Number of likes per year"
            dummyState.data.labels=["2016", "2017", "2018", "2019", "2020"]
            dummyState.data.datasets[0].data=[450, 502, 472, 453, 454]
            this.setState({likes: dummyState})
            myLineChartLikes.destroy();
            myLineChartLikes = new Chart(ctxLTwo, this.state.likes);
        }
        else if(e.target.value == "monthly") {
            var dummyState = {...this.state.likes}
            dummyState.data.datasets[0].label="Number of likes per month"
            dummyState.data.labels=["January", "February", "March", "April", "May", "June", "July", "September", "October", "Novmber", "December"]
            dummyState.data.datasets[0].data=[25, 24, 26, 19, 29, 28, 30, 27, 24, 22, 31, 28]
            this.setState({likes: dummyState})
            myLineChartLikes.destroy();
            myLineChartLikes = new Chart(ctxLTwo, this.state.likes);
        }
    };

    render()
    {
        {document.title ="Edit profile - Spotify"}

        return(    
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
                            </div>
                        </div>  
                    </div> 
                </div>  
            </div>                                        
        )
    }

}

export default Audience;