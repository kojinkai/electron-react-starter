import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        {this.props.dashboardItems.map(item =>
          <div className="dashboard__item">
            <span className="dashboard__item-inner">
              {item.name}
            </span>
          </div>
        )}
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboardItems: PropTypes.array.isRequired,
};

export default Dashboard;
