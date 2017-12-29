import React from 'react';
import ChartToolbar from './ChartToolbar';
import {shallow} from "enzyme";

it('renders without crashing', () => {
  shallow(<ChartToolbar />);
});

it('renders low button', () => {
  const button = 'Low'
  const wrapper = shallow(<ChartToolbar />);
  expect(wrapper.contains(button)).toEqual(true);
});

it('renders mean button', () => {
  const button = 'Mean'
  const wrapper = shallow(<ChartToolbar />);
  expect(wrapper.contains(button)).toEqual(true);
});

it('renders high button', () => {
  const button = 'High'
  const wrapper = shallow(<ChartToolbar />);
  expect(wrapper.contains(button)).toEqual(true);
});