import React, { Component } from 'react';
import './Header.css';
import {Col, Grid, Row} from "react-bootstrap";
import Search from "./Search";
import Temperature from "./Temperature";

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
  }

  handleCityChange(city) {
    this.props.onCityChange(city);
  }

  handleTemperatureChange(temp) {
    this.props.onTemperatureChange(temp);
  }

  render() {
    return (
      <header className="Header-header">
        <Grid>
          <Row className="show-grid">
            <Col xs={12} sm={6}>
              <h1 className="Header-title">Weather App</h1>
            </Col>
            <Col xs={8} sm={4}>
              <Search onCityChange={this.handleCityChange} />
            </Col>
            <Col xs={4} sm={2}>
              <Temperature temperature={this.props.temperature} onTemperatureChange={this.handleTemperatureChange} />
            </Col>
          </Row>
        </Grid>
      </header>
    );
  }
}

export default Header;
