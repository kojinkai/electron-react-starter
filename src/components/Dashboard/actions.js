import { createAction } from 'redux-actions';
export const saveDashboardItem = createAction('SAVE_DASHBOARD_ITEM');
export const completeSaveDashboardItem = createAction('COMPLETE_SAVE_DASHBOARD_ITEM');
export const failedSaveDashboardItem = createAction('FAILED_SAVE_DASHBOARD_ITEM');
