import React from 'react';
import Chart from './Chart';
import {shallow} from "enzyme";

it('renders without crashing', () => {
  shallow(<Chart />);
});
