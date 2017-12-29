import React from 'react';
import ReactDOM from 'react-dom';
import Temperature from './Temperature';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Temperature />, div);
});

it('renders Fahrenheit', () => {
  const fahrenheit = 'Fahrenheit'
  const wrapper = shallow(<Temperature />);
  expect(wrapper.contains(fahrenheit)).toEqual(true);
});

it('renders Celsius', () => {
  const celsius = 'Celsius'
  const wrapper = shallow(<Temperature />);
  expect(wrapper.contains(celsius)).toEqual(true);
});
