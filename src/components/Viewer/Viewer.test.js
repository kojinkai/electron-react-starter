import React from 'react';
import { shallow } from 'enzyme';
import Viewer from './Viewer';

it('renders according to the snapshot', () => {
  const wrapper = shallow(<Viewer />);
  expect(wrapper).toMatchSnapshot();
});
