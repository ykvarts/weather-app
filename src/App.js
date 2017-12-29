import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import Content from "./Content/Content";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
    this.state = {city: '', temperature: 'F'};
  }

  handleCityChange(city) {
    this.setState({city: city});
  }

  handleTemperatureChange(temp) {
    this.setState({temperature: temp});
  }

  render() {
    return (
      <div className="App">
        <Header
          onCityChange={this.handleCityChange}
          onTemperatureChange={this.handleTemperatureChange}
          temperature={this.state.temperature} />
        <Content city={this.state.city} temperature={this.state.temperature} />
      </div>
    );
  }
}

export default App;