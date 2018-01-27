import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './Dashboard';
const mockItems = [{ id: 1234, name: 'foo' }, { id: 2345, name: 'bar' }];

it('renders according to the snapshot', () => {
  const wrapper = shallow(
    <Dashboard
      dashboardItems={mockItems}
      saveDashboardItem={jest.fn()}
    />
  );
  expect(wrapper).toMatchSnapshot();
});

it('should call the saveDashboardItem prop with a new item when the add button is clicked', () => {
  const saveDashboardItemSpy = jest.fn();
  const wrapper = shallow(
    <Dashboard
      dashboardItems={mockItems}
      saveDashboardItem={saveDashboardItemSpy}
    />
  );

  wrapper.find('button').simulate('click');

  expect(saveDashboardItemSpy).toHaveBeenCalledWith({
    name: 'item 3',
  });
});
