import { connect } from 'react-redux';
import Dashboard from './Dashboard';

const mapStateToProps = state => console.log('state is: ', state) || ({
  dashboardItems: state.dashboard.toJS(),
});

export default connect(mapStateToProps)(Dashboard);
