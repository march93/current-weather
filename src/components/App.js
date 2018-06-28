import React, { Component } from 'react';
import '../styles/App.css';
import CityMenu from './CityMenu';
import WeatherCard from './WeatherCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CityMenu></CityMenu>
        <WeatherCard></WeatherCard>
      </div>
    );
  }
}

export default App;