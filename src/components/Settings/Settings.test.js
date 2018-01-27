import React from 'react';
import { shallow } from 'enzyme';
import Settings from './Settings';

it('renders according to the snapshot', () => {
  const wrapper = shallow(<Settings />);
  expect(wrapper).toMatchSnapshot();
});
