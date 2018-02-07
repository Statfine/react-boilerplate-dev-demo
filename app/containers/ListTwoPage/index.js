import React, { PureComponent } from 'react';
import { BasePage } from 'containers/BasePage';
import Filter from './filter';
import List from './list';

class DashboardOne extends PureComponent {

  componentWillMount() {
    // TODO
  }

  render() {
    return (
      <div>
        <p>DashboardOne 这是第二个子页面</p>
        <Filter />
        <List />
      </div>
    );
  }
}

export default BasePage(DashboardOne);
