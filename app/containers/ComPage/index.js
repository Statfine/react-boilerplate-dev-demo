import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import SonPAge from './SonCom';
/**
 * 组件内的state变动会导致组件重新渲染
 * 子组建如果有匿名函数 父组件渲染的时候 子组件都会重新渲染
 */
export default class FatherPage extends PureComponent {
  state = {
    index: 0,
  };
  handleOnMouseMove = (ev) => {
    ev.stopPropagation();
    this.setState({ aaaa: Math.random() });
  }
  handleClick = () => {
    this.setState({ aaaa: Math.random() });
  }
  render() {
    const { index } = this.state;
    console.log('render');
    return (
      <div
        onMouseMove={this.handleOnMouseMove}
        onClick={this.handleClick}
      >
        <Helmet title="子组件" />
        <p>组件内的state变动会导致组件重新渲染</p>
        <p>子组建如果有匿名函数 父组件渲染的时候 子组件都会重新渲染, 匿名函数导致新对象，所以也会重新渲染</p>
        <p>{index}</p>
        <SonPAge index={index} />
        {/* <SonPAge index={index} show={() => console.log('aa')} /> */}
      </div>
    );
  }
}
