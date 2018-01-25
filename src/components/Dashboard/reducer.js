import { handleActions } from 'redux-actions';
import { addDashboardItem } from './actions';

const dashBoardReducer = handleActions({
  [addDashboardItem]: state => {
    const array = new Uint32Array(10);
    const rand = window.crypto.getRandomValues(array)[3];
    return state.push({
      name: `item ${state.size + 1}`,
      id: rand,
    });
  },
}, null);

export default dashBoardReducer;
