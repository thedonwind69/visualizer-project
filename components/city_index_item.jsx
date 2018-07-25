import React from 'react';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import Cities from "../js/cities";
import * as D3Stuff from '../js/d3-stuff';
import PieChart from './pie-chart'; 
class CityIndexItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentCityIndex: this.props.match.params.cityId,
            currentCity: Cities[this.props.match.params.cityId],
            currentCityPopulation: Cities[this.props.match.params.cityId].population,
            loaded: false,
            pieChart: false,
        }
    }

    componentDidMount() {
        setTimeout(function () {
            this.setState({loaded: true});
            D3Stuff.createBarChart(this.state.currentCityPopulation);
        }.bind(this), 700);
    }

    switchToPieChart () {
        this.setState({
            pieChart: true,
            loaded: false,
        });
    }

    render () {
        var currentCity = this.state.currentCity;
        console.log(this.state.pieChart);
        if (this.state.loaded) {
            return (
                <div>
                    <button class='qbutton'><Link class='city-link' to='/'>Back to home page</Link></button>
                    <h1>9 year population growth from 2007-2016 for {currentCity.name}</h1>
                    <div class='animated' id="bar-graph">
                        <svg id='svg' width="1000" height="400">
                        </svg>
                    </div>
                    <button onClick={this.switchToPieChart.bind(this)}>Racial Demographics</button>
                </div>
            )  
        } else if (!this.state.loaded && !this.state.pieChart) {
            return (
                <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
                <div class="rect5"></div>
                </div>
            )
        } else if (this.state.pieChart) {
            return (
                <PieChart currentCity={currentCity}/>
            )
        }
        
    }

}

export default CityIndexItem;