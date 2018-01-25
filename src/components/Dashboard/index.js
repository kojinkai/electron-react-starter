import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { addDashboardItem } from './actions';

const mapStateToProps = state => ({
  dashboardItems: state.dashboard.toJS(),
});

const mapDispatchToProps = dispatch => ({
  addDashboardItem: () => dispatch(addDashboardItem()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
