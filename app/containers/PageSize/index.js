
import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';

class PageSize extends PureComponent {
  state = {};

  render() {
    return (
      <div>
        <Helmet title="宽高" />
        <div>
          区域宽高
        </div>
      </div>
    );
  }
}

export default PageSize;
