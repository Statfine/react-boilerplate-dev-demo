import React, { PureComponent } from 'react';
import Filter from './filter';
import List from './list';

export default class DashboardOne extends PureComponent {

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
