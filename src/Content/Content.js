import React, { Component } from 'react';
import {Col, Grid, Row} from "react-bootstrap";
import ChartContainer from "./Chart/ChartContainer";

class Content extends Component {
  render() {
    let content = null
    if (!this.props.city){
      content = <p>Please, select city using search box above</p>
    }else{
      content = <ChartContainer city={this.props.city} temperature={this.props.temperature} />
    }
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={6}>
            <h2> {this.props.city} </h2>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12}>
            {content}
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Content;