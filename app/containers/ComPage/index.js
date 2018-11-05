import React, { PureComponent } from 'react';
import { Helmet } from 'react-helmet';
import SonPAge from './SonCom';

// const shallowEqual = require('./copyShallowEqual');
/**
 * 组件内的state变动会导致组件重新渲染
 * 子组建如果有匿名函数 父组件渲染的时候 子组件都会重新渲染
 */
export default class FatherPage extends PureComponent {
  state = {
    index: 0,
  };

  // componentDidMount() {
  //   const list = ['aaa', 'bbb', 'ccc'];
  //   const reListTwo = list.concat('ddd');
  //   const equal1 = shallowEqual(list, reListTwo);
  //   // const reList = list;
  //   list.push('ddd');
  //   const equal = shallowEqual(list, reListTwo);
  //   // const equalTwo = shallowEqual(list, reList);
  //   debugger;
  //   console.log(`equal:${equal}`);
  // }

  handleOnMouseMove = (ev) => {
    ev.stopPropagation();
    // this.setState({ aaaa: Math.random() });
  }
  handleClick = () => {
    console.log('handleClick');
    this.setState({ aaaa: Math.random() });
  }

  handleShow = () => console.log('aa');

  render() {
    const { index, aaaa } = this.state;
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
        <p>aaaa:{aaaa}</p>
        <SonPAge index={index} name="one" />
        <SonPAge index={index} aaa={aaaa} name="two" show={() => console.log('aa')} />
        <SonPAge index={index} name="three" show={this.handleShow} />
      </div>
    );
  }
}
