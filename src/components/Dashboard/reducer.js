import { handleActions } from 'redux-actions';
import {
  saveDashboardItem,
  completeSaveDashboardItem,
  failedSaveDashboardItem,
} from './actions';

import { generateID } from '../../db';

const dashBoardReducer = handleActions({
  [saveDashboardItem]: (state, action) => state
    .merge({
      writing: true,
      items: state.get('items').push({
        name: action.payload.name,
        id: generateID(),
      })
    }),
  [completeSaveDashboardItem]: state => state.set('writing', false),
  [failedSaveDashboardItem]: state => state.merge({
    writing: false,
    writeFailed: true,
  }),
}, null);

export default dashBoardReducer;
