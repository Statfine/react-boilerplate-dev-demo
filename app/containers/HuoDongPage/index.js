import React, { PureComponent } from 'react';
import { BasePage } from 'containers/BasePage';
import { Helmet } from 'react-helmet';


// withRef
class HuoDongPage extends PureComponent {
  state = {};
  render() {
    return (
      <div>
        <Helmet title="HuoDongPage" />
        <p>tmpWin.location.replace 页面跳转无返回按钮</p>
        <p>cookie随domain和Path</p>
      </div>
    );
  }
}

export default BasePage(HuoDongPage);
