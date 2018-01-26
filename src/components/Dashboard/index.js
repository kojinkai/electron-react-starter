import { connect } from 'react-redux';
import Dashboard from './Dashboard';
import { saveDashboardItem } from './actions';

const mapStateToProps = state => ({
  dashboardItems: state.dashboard.get('items').toJS(),
});

const mapDispatchToProps = dispatch => ({
  saveDashboardItem: (name = 'item x') => dispatch(saveDashboardItem(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
