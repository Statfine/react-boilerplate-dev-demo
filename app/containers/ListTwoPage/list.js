import React, { PureComponent } from 'react';

export default class List extends PureComponent {

  state = {
    list: [1, 2, 3, 4, 5, 6],
  }

  componentWillMount() {
    // TODO
  }

  render() {
    const { list } = this.state;

    return (
      <div>
        {
          list.map((item) => <div key={item}>{item}</div>)
        }
      </div>
    );
  }
}
