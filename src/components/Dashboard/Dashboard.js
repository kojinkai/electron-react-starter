import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Dashboard.css';

export class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <div className="dashboard__items">
          {this.props.dashboardItems.map(item =>
            <div key={item.id} className="dashboard__item">
              <span className="dashboard__item-inner">
                {item.name}
              </span>
            </div>
          )}
        </div>
        <button className="dashboard__add-icon" onClick={
          () => this.props.saveDashboardItem({
            name: `item ${this.props.dashboardItems.length + 1}`,
          })
        }>
          <span className="dashboard__add-icon-bar dashboard__add-icon-bar--horizontal"></span>
          <span className="dashboard__add-icon-bar dashboard__add-icon-bar--vertical"></span>
        </button>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboardItems: PropTypes.array.isRequired,
  saveDashboardItem: PropTypes.func.isRequired,
};

export default Dashboard;
