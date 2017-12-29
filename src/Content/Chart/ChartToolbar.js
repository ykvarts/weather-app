import React, { Component } from 'react';
import {ButtonToolbar, Col, Row, ToggleButton, ToggleButtonGroup} from "react-bootstrap";

class ChartToolbar extends Component {
  constructor(props) {
    super(props);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);
  }

  handleTemperatureChange = (val) => {
    this.props.onTemperatureLineChange(val);
  }

  render() {
    return (
      <Row className="show-grid">
        <Col xs={12} sm={4}>
          <ButtonToolbar>
            <ToggleButtonGroup
              type="checkbox"
              defaultValue={this.props.temperatureLines}
              justified
              onChange={this.handleTemperatureChange}>
              <ToggleButton value='low'>Low</ToggleButton>
              <ToggleButton value='mean'>Mean</ToggleButton>
              <ToggleButton value='high'>High</ToggleButton>
            </ToggleButtonGroup>
          </ButtonToolbar>
        </Col>
      </Row>
    )
  }
}

export default ChartToolbar