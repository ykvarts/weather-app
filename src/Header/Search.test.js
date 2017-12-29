import React from 'react';
import Search from './Search';
import {shallow} from "enzyme";

it('renders without crashing', () => {
  shallow(<Search />);
});
