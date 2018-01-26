import { handleActions } from 'redux-actions';
import { addDashboardItem } from './actions';

const dashBoardReducer = handleActions({
  [addDashboardItem]: state => {
    const array = new Uint32Array(10);
    const id = window.crypto.getRandomValues(array)[3];
    return state.push({
      name: `item ${state.size + 1}`,
      id,
    });
  },
}, null);

export default dashBoardReducer;
