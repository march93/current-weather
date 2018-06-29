import React, { Component } from 'react';
import '../styles/WeatherCard.css';
import { connect } from 'react-redux';
import request from 'superagent';
import { APIKEY, WEATHERIMG } from '../constants/Constants';
import { loadData } from '../actions/Action';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { List } from 'react-content-loader'

// get state from redux store
const mapStateToProps = state => {
    return { city: state.city, data: state.data };
};

// dispatch load data action to redux store
const mapDispatchToProps = dispatch => {
    return {
        loadData: data => dispatch(loadData(data))
    };
};

class WeatherCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        }

        this.city = this.props.city;
    }

    getWeatherReport() {
        // call weather api (in metric -> Celsius)
        request
            .get('https://api.openweathermap.org/data/2.5/weather')
            .set('Content-Type', 'application/x-www-form-urlencoded')
            .query({ q: this.city, units: 'metric', appid: APIKEY })
            .end(function(err, res){
                if (res.body) {
                    // disable loading
                    this.setState({
                        loading: false
                    });

                    // save results to weatherData variable
                    this.props.loadData(res.body);
                } else {
                    console.log(err);

                    // disable loading
                    this.setState({
                        loading: false
                    });
                }
        }.bind(this));
    }

    componentDidMount() {
        // get initial weather report for default city
        this.getWeatherReport();
    }

    componentWillReceiveProps(nextProps) {
        // update loader and city when user clicks a different city
        if (this.props.city !== nextProps.city) {
            this.setState({
                loading: true
            });
            this.city = nextProps.city;
            this.getWeatherReport();
        }
    }

    render() {
        // render card only when weather data is available and loader is false
        if (Object.keys(this.props.data).length !== 0 && this.props.data.constructor === Object && !this.state.loading) {
            return (
            <div className="WeatherCard">
                <Card className="card">
                    <CardMedia
                        className="cardMedia"
                        image={WEATHERIMG + this.props.data.weather[0].icon + '.png'}
                        title="Current Weather Icon"
                    />
                    <CardContent className="cardContent">
                        <Typography gutterBottom variant="headline" component="h1" className="tempTitle">
                            Current Weather in {this.props.data.name}
                        </Typography>
                        <Typography component="h2" className="tempSub">
                            Current Temperature: <span className="degrees">{this.props.data.main.temp} &#8451;</span>
                        </Typography>
                        <Typography component="h2" className="tempSub">
                            Minimum Temperature: <span className="degrees">{this.props.data.main.temp_min} &#8451;</span>
                        </Typography>
                        <Typography component="h2" className="tempSub">
                            Maximum Temperature: <span className="degrees">{this.props.data.main.temp_max} &#8451;</span>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
            );
        } else {
            // render loading screen
            return (
                <div className="loading-div">
                    <span>Loading...</span>
                    <List 
                        className="loader"    
                    />
                </div>
            );
        }
    }
}

const CardInfo = connect(mapStateToProps, mapDispatchToProps)(WeatherCard);

export default CardInfo;