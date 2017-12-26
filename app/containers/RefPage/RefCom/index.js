import React, { PureComponent } from 'react';
import { Button } from 'antd';

export default class RefCom extends PureComponent {
  state = {
    title: 'haha',
  };
  publickSetState = (title) => {
    this.setState({ title });
  }
  publickClickBtn = () => {
    this.btn.props.onClick();
  }
  publickGetState = () => this.state;
  render() {
    const { title } = this.state;
    return (
      <div>
        <p>我是标题: {title}</p>
        <Button
          ref={(e) => { this.btn = e; }}
          onClick={() => alert('click me')}
          type="primary"
        >
          click
        </Button>
      </div>
    );
  }
}
