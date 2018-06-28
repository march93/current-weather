import React, { Component } from 'react';
import '../styles/App.css';
import CityMenu from './CityMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CityMenu></CityMenu>
      </div>
    );
  }
}

export default App;
