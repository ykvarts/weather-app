import React from 'react';
import Content from './Content';
import {shallow} from "enzyme";

it('renders without crashing', () => {
  shallow(<Content />);
});

it('renders select city message', () => {
  const message = <p>Please, select city using search box above</p>
  const wrapper = shallow(<Content />);
  expect(wrapper.contains(message)).toEqual(true);
});

it('renders select city name', () => {
  const city = 'Portland, OR'
  const wrapper = shallow(<Content />);
  wrapper.setProps({city: city})
  expect(wrapper.contains(city)).toEqual(true);
});