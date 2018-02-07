import React, { PureComponent } from 'react';
import TextField from 'material-ui/TextField';
import styled from 'styled-components';
import { BasePage } from 'containers/BasePage';
import DivInput from 'components/DivInput';
import FoldCom from 'components/FoldCom';
import OwnInput from './InputText';

const Input = styled.div`
  outline: none;
  border: 1px solid #4885ed;
  &:empty:before {
    content:attr(placeholder);
    font-size: 12px;
    color: #c7c7c7;
  }
  &:focus{
    content: none;
  }
`;

const DATA = {
  one: [{ title: 'one1', choose: true }, { title: 'one2', choose: false }, { title: 'one3', choose: false }],
  two: [{ title: 'two1', choose: false }, { title: 'two2', choose: true }, { title: 'two3', choose: false }],
  three: [{ title: 'three1', choose: false }, { title: 'three2', choose: false }, { title: 'three3', choose: true }],
};

class DashboardOne extends PureComponent {

  state = {
    name: '',
    filter: '',
    list: [1, 2, 3, 4, 5, 6],
    title: '123',
  }

  componentWillMount() {
    // TODO
  }

  handlegetChoosed = () => {
    console.log(Object.keys(DATA));
    const params = {};
    const paramsArrary = [];
    for (const value in DATA) { // eslint-disable-line
      console.log(value + DATA[value]);
      const eachObj = DATA[value];
      const choosedItem = eachObj.filter((v) => v.choose);
      params[value] = choosedItem;
      paramsArrary.push(choosedItem[0].title);
    }
    console.log(params);
    console.log(paramsArrary);
    return paramsArrary;
  }

  handleChange = () => {
    console.log(this.textInput.innerText);
    // this.textInput.focus();
  }

  // $('#edit').innerText
  // $('#edit').innerHTML
  // $("#elementId").blur()
  render() {
    const { name, filter, list } = this.state;

    return (
      <div>
        {this.handlegetChoosed()}
        <p>DashboardOne 这是第一个子页面</p>
        <div
          onClick={() => {
            this.textInputOne.publickOnFouce();
          }}
        >focus</div>
        <Input
          placeholder="直播地址"
          innerRef={(ref) => { this.textInput = ref; }}
          contentEditable="true"
          onInput={this.handleChange}
          onBlur={this.handleChange}
        />
        <TextField
          id="login_name"
          value={name}
          type="text"
          onChange={(e, newValue) => this.setState({ name: newValue })}
        /><br />
        <TextField
          id="login_possword"
          value={filter}
          type="text"
          onChange={(e, newValue) => this.setState({ filter: newValue })}
        /><br />
        <OwnInput
          id="own"
          value={filter}
          onChange={(e, newValue) => this.setState({ filter: newValue })}
        />
        {
          list.map((item) => <div key={item}>{item}</div>)
        }
        <div>{this.state.title}</div>
        <DivInput
          ref={(ref) => { this.textInputOne = ref; }}
          value={this.state.title}
          onChange={(title) => this.setState({ title })}
          placeholder="test"
        />
        <FoldCom
          HeaderNode={<div>Title</div>}
          ContentNode={<div>Container</div>}
        />
      </div>
    );
  }
}

export default BasePage(DashboardOne);
