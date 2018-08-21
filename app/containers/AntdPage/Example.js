import React, { PureComponent } from 'react';

export default class Example extends PureComponent {
  state = {};
  render() {
    console.log('render Example');
    return (
      <div>
        <p>Example</p>
      </div>
    );
  }
}
