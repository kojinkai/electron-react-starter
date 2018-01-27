import { call, put, takeEvery } from 'redux-saga/effects'
import { saveToDB } from '../../db/configureIDB';
import { completeSaveDashboardItem } from './actions';
import { takeSaveDashboardItem, saveItem } from './saga';

describe('filtering the SAVE_DASHBOARD_ITEM action', () => {
  it('should take every saveDashboardItem action and call save item', () => {
    const iterator = takeSaveDashboardItem();
    const actual = iterator.next().value;
    const expected = takeEvery('SAVE_DASHBOARD_ITEM', saveItem);

    expect(actual).toEqual(expected);
  });
});


describe('saving data using the DB driver', () => {
  const iterator = saveItem({ payload: 'foo' });

  // generator - step 1
  it('should call the saveToDB function exported by the DB driver', () => {
    const actual = iterator.next().value;
    const expected = call(saveToDB, 'foo');
    expect(actual).toEqual(expected);
  });

  // generator - step 1
  it('should pass the result to the COMPLETE_SAVE_DASHBOARD_ITEM action', () => {
    const actual = iterator.next().value;
    const expected = put(completeSaveDashboardItem());
    expect(actual).toEqual(expected);
  })
})
