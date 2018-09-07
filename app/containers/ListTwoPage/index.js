import React, { PureComponent } from 'react';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';
import Filter from './filter';
import List from './list';

class DashboardOne extends PureComponent {

  componentWillMount() {
    // TODO
  }

  render() {
    return (
      <div>
        <Helmet title="两个个列表" />
        <p>DashboardOne 这是第二个子页面</p>
        <Filter />
        <List />
      </div>
    );
  }
}

export default BasePage(DashboardOne);
