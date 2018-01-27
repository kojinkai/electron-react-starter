import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from './Sidebar';

it('renders according to the snapshot', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper).toMatchSnapshot();
});
