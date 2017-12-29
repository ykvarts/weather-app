import React, { Component } from 'react';
import './Search.css';
import { Typeahead } from 'react-bootstrap-typeahead';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.state = {
      cities: [
        {name: 'Amsterdam, Netherlands'},
        {name: 'Cleveland, OH'},
        {name: 'Istanbul, Turkey'},
        {name: 'Murmansk, Russia'},
        {name: 'New York City, NY'},
        {name: 'Oakland, CA'},
        {name: 'Rome, Italy'},
        {name: 'Tel Aviv, Israel'},
        {name: 'San Francisco, CA'},
      ]
    }
  }

  handleCityChange(selectedCities) {
    if (selectedCities.length > 0){
      this.props.onCityChange(selectedCities[0].name);
    }
  }

  render() {
    return (
      <Typeahead
        className="Search"
        labelKey="name"
        placeholder="Search city..."
        options={this.state.cities}
        selectHintOnEnter={true}
        onChange={this.handleCityChange} />
    );
  }
}

export default Search;
