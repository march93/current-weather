import React, { Component } from 'react';
import '../styles/WeatherCard.css';
import { connect } from 'react-redux';
import request from 'superagent';
import { APIKEY } from '../constants/Constants';

// get state from redux store
const mapStateToProps = state => {
    return { city: state.city };
};

class WeatherCard extends Component {
    constructor(props) {
        super(props);

        // current weather report
        this.weatherData = null;
    }

    getWeatherReport() {
        // call weather api (in metric -> Celsius)
        request
            .get('https://api.openweathermap.org/data/2.5/weather')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .query({ q: this.props.city, units: 'metric', appid: APIKEY })
            .end(function(err, res){
                if (res.body) {
                    // save results to weatherData variable
                    this.weatherData = res.body;
                } else {
                    console.log(err);
                }
        }.bind(this));

        return this.props.city;
    }

    render() {
        return (
        <div className="WeatherCard">
        </div>
        );
    }
}

const Card = connect(mapStateToProps)(WeatherCard);

export default Card;