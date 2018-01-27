import React from 'react';
import { shallow } from 'enzyme';
import Masthead from './Masthead';

it('renders according to the snapshot', () => {
  const wrapper = shallow(<Masthead />);
  expect(wrapper).toMatchSnapshot();
});
