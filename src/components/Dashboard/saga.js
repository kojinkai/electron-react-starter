import { call, put, takeEvery } from 'redux-saga/effects'
import { saveDashboardItem, completeSaveDashboardItem, failedSaveDashboardItem } from './actions';
import { saveToDB } from '../../db/configureIDB';
import { getActionType } from '../../utils';

export function* saveItem(action) {
   try {
      const saveRequest = yield call(saveToDB, action.payload);
      yield put(completeSaveDashboardItem(saveRequest));
   } catch (e) {
      yield put(failedSaveDashboardItem());
   }
}

export function* takeSaveDashboardItem() {
  yield takeEvery(getActionType(saveDashboardItem), saveItem);
}

export default takeSaveDashboardItem;
