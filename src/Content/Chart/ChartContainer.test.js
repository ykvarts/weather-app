import React from 'react';
import ChartContainer from './ChartContainer';
import {shallow} from "enzyme";

it('renders without crashing', () => {
  shallow(<ChartContainer />);
});
