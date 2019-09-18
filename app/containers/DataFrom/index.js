import React from 'react';
import _ from 'lodash';

import { dataOne } from './mock';
import InputCom from './InputCom';
import CheckBoxCom from './CheckboxCom';
import RadioCom from './RadioCom';
import SelectCom from './SelectCom';

export default class DataFrom extends React.PureComponent {
  state = {
    params: {},
  };

  componentWillMount() {
    const params = {};
    dataOne.map((item) => params[item.field] = item.value);
    this.setState({ params });
  }

  handleChangeParams = (obj) => {
    const { params } = this.state;
    const newParams = _.merge({}, params, obj);
    this.setState({ params: newParams });
  }

  renderEl = (i) => {
    switch (i.type) {
      case 'string':
        return (
          <InputCom
            key={i.name}
            value={this.state.params[i.field]}
            dataInfo={i}
            onChange={(e) => {
              const object = {};
              object[i.field] = e.target.value;
              this.handleChangeParams(object);
            }}
          />);
      case 'number':
        return (
          <InputCom
            key={i.name}
            isNumber
            value={this.state.params[i.field].toString()}
            dataInfo={i}
            onChange={(value) => {
              const object = {};
              object[i.field] = value;
              this.handleChangeParams(object);
            }}
          />);
      case 'checkbox':
        return (
          <CheckBoxCom
            key={i.name}
            value={this.state.params[i.field]}
            dataInfo={i}
            onChange={(value) => {
              const object = {};
              object[i.field] = value.join(',');
              this.handleChangeParams(object);
            }}
          />);
      case 'radio':
        return (
          <RadioCom
            key={i.name}
            value={this.state.params[i.field]}
            dataInfo={i}
            onChange={(e) => {
              const object = {};
              object[i.field] = e.target.value;
              this.handleChangeParams(object);
            }}
          />);
      case 'select':
        return (
          <SelectCom
            key={i.name}
            value={this.state.params[i.field]}
            dataInfo={i}
            onChange={(value) => {
              const object = {};
              object[i.field] = value;
              this.handleChangeParams(object);
            }}
          />);
      default:
        return null;
    }
  }

  render() {
    const { params } = this.state;
    console.log(params);
    return (
      <div>
        <p>根据固定数据对象显示不同表单</p>
        {
          dataOne.map((item) => this.renderEl(item))
        }
      </div>
    );
  }
}
