import React, { Component } from 'react';
import moment from 'moment';
import { VictoryChart, VictoryLine, VictoryTooltip, VictoryVoronoiContainer, VictoryAxis, VictoryLegend } from 'victory'
import sizer from 'react-sizer';

class Chart extends Component {
  mapChartPoints(days, temperature, type){
    return days.map(day => {
      let tempF = day.temp[type + 'temp_f'];
      let tempC = day.temp[type + 'temp_c'];
      return {
        x: new Date(day.dateEpoch),
        y: temperature === 'C' ? tempC : tempF
      }
    })
  }

  render() {
    const { data, temperature, lines } = this.props
    let lowLine = null, meanLine = null, highLine = null, legend = []

    if (!lines.length){
      return null
    }

    if (lines.includes('low')){
      lowLine = <VictoryLine
        scale={{x: "time", y: "linear"}}
        data={this.mapChartPoints(data, temperature, 'min')}
        style={{
          data: { stroke: "#337ab7", strokeWidth: (d, active) => active ? 4 : 2},
          labels: {fill: "#337ab7"}
        }}
      />
      legend.push({ name: "Low", symbol: { fill: "#337ab7" } })
    }

    if (lines.includes('mean')){
      meanLine = <VictoryLine
        scale={{x: "time", y: "linear"}}
        data={this.mapChartPoints(data, temperature, 'avg')}
        style={{
          data: { stroke: "black", strokeWidth: (d, active) => active ? 4 : 2},
          labels: {fill: "black"}
        }}
      />
      legend.push({ name: "Mean", symbol: { fill: "black" } })
    }

    if (lines.includes('high')){
      highLine = <VictoryLine
        scale={{x: "time", y: "linear"}}
        data={this.mapChartPoints(data, temperature, 'max')}
        style={{
          data: { stroke: "#d9534f", strokeWidth: (d, active) => active ? 4 : 2},
          labels: {fill: "#d9534f"}
        }}
      />
      legend.push({ name: "High", symbol: { fill: "#d9534f" } })
    }

    return (
      <VictoryChart
        containerComponent={
          <VictoryVoronoiContainer voronoiDimension="x"
                                   labels={(d) => moment(d.x).format('MMM D, YYYY') + ' - ' + d.y + ' \u00B0' + temperature}
                                   labelComponent={<VictoryTooltip cornerRadius={0} flyoutStyle={{fill: "white"}}/>}
          />
        }
        width={this.props.width}
        height={380}
        domainPadding={{y: [20, 20]}}>
        {highLine}
        {meanLine}
        {lowLine}
        <VictoryAxis
          tickFormat={(tick) => moment(tick).format("MMM D, YYYY")}
          offsetY={50}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(tick) => tick + '\u00B0'}
        />
        <VictoryLegend x={this.props.width/2 - legend.length * 30} y={20}
         orientation="horizontal"
         gutter={20}
         style={{ border: { stroke: "black" } }}
         data={legend}
        />
      </VictoryChart>
    )
  }
}

export default sizer()(Chart);