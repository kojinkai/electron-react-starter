import { call, put, takeEvery } from 'redux-saga/effects'
import { saveDashboardItem, completeSaveDashboardItem, failedSaveDashboardItem } from './actions';
import { saveToDB } from '../../db/configureIDB';
import { getActionType } from '../../utils';

function* saveItem(action) {
   try {
      const saveRequest = yield call(saveToDB, action.payload);
      yield put(completeSaveDashboardItem(saveRequest));
   } catch (e) {
      yield put(failedSaveDashboardItem());
   }
}

function* dashboardSaga() {
  yield takeEvery(getActionType(saveDashboardItem), saveItem);
}

export default dashboardSaga;
