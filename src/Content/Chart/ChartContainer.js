import React, { Component } from 'react';
import moment from 'moment';
import Chart from "./Chart";
import ChartToolbar from "./ChartToolbar";
import config from '../../config.json';

class ChartContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoading: false,
      loadedDays: 0,
      days: [],
      temperatureLines: ['mean']
    };
    this.handleTemperatureLineChange = this.handleTemperatureLineChange.bind(this);
  }

  handleTemperatureLineChange(lines){
    this.setState({ temperatureLines:lines })
  }

  componentWillReceiveProps(nextProps){
    if (!this.state.isLoading && nextProps.city !== this.props.city){
      this.loadTemperatures(nextProps.city)
    }
  }

  componentDidMount(){
    this.loadTemperatures(this.props.city)
  }

  loadTemperatures(city){
    if (!city){
      return
    }

    let date = moment()
    this.setState({
      isLoading: true,
      loadedDays: 0,
      days: []
    });

    //!!!!!!
    //Free apixu api allows only load single day at a time.
    //(Optional) end_dt only works for API on Gold plan and above.
    //As a workaround we can do 30 requests to load 30 days of history.
    //Please, buy a license and do not use this approach in production code
    //https://www.apixu.com/doc/request.aspx
    for(let i=30; i>0; i--){
      this.loadTemperatureForDay(city, date, i-1)
      date.subtract(1, 'day')
    }
  }

  loadTemperatureForDay(city, date, day){
    let url = `${config.apiBase}${config.apiHistory}?${config.apiKey}&q=${city}&dt=${date.format('YYYY-MM-DD')}`;
    window.fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          let days = [...this.state.days]
          let forecastDay = result.forecast.forecastday[0];
          days[day] = {
            dateEpoch: moment(forecastDay.date),
            temp: forecastDay.day
          }

          let isLoading = this.state.loadedDays + 1 !== 30;

          this.setState({
            loadedDays: this.state.loadedDays + 1,
            isLoading: isLoading,
            days: days
          });
        },
        (error) => {
          this.setState({
            isLoading: false,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoading, days } = this.state;
    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <p>Temperatures aggregated by day for the past 30 days</p>
          <ChartToolbar
            temperatureLines={this.state.temperatureLines}
            onTemperatureLineChange={this.handleTemperatureLineChange} />
          <Chart
            data={days}
            temperature={this.props.temperature}
            lines={this.state.temperatureLines}/>
        </div>
      )
    }
  }
}

export default ChartContainer