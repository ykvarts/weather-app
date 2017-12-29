import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

it('shallow renders without crashing', () => {
  shallow(<Header />);
});

it('renders header title', () => {
  const title = <h1 className="Header-title">Weather App</h1>
  const wrapper = shallow(<Header />);
  expect(wrapper.contains(title)).toEqual(true);
});
