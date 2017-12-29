import React, { Component } from 'react';
import {SplitButton, MenuItem} from "react-bootstrap";

class Temperature extends Component {
  constructor(props) {
    super(props);
    this.changeTemperature = this.changeTemperature.bind(this);
  }

  changeTemperature = (val) => {
    this.setState({temperature: val});
    this.props.onTemperatureChange(val);
  }

  render() {
    return (
      <SplitButton bsStyle="default" title={'\u00B0' + this.props.temperature} id='temperature' onSelect={this.changeTemperature}>
        <MenuItem eventKey="F">Fahrenheit</MenuItem>
        <MenuItem eventKey="C">Celsius</MenuItem>
      </SplitButton>
    );
  }
}

export default Temperature;
