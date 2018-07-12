import React, { PureComponent } from 'react';
import Data from './data.json';
import Item from './Item';

export default class TagsCom extends PureComponent {
  state = {};
  componentWillMount() {
    console.log(Data);
  }
  render() {
    return (
      <div>
        {Data.childs.map((item) => (
          <Item key={item.key} data={item} zIndex={0} />
        ))}
      </div>
    );
  }
}
