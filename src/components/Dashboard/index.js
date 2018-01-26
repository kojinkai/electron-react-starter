import { connect } from 'react-redux';
import Dashboard from './Dashboard';
// import { addDashboardItem } from './actions';
import { saveToDB } from '../../db/configureIDB';

const mapStateToProps = state => ({
  dashboardItems: state.dashboard.toJS(),
});

const mapDispatchToProps = dispatch => ({
  addDashboardItem: () => {
    const data = {
      name: 'item y',
    };
    saveToDB(data);
  }    
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
