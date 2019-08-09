import React, { PureComponent } from 'react';
import { Input } from 'antd';
import styled from 'styled-components';

const P = styled.p`
  white-space: pre;
`;

const { TextArea } = Input;

export default class TextAreaCom extends PureComponent {
  state = {
    value: '',
  };

  handleChangeValue = (e) => {
    this.setState({ value: e.target.value });
  }
  render() {
    const { value } = this.state;
    console.log(value);
    return (
      <div>
        <TextArea
          style={{ width: 300 }}
          rows={4}
          value={value}
          onChange={this.handleChangeValue}
        />
        {
          value.split('\n').map((item) => (
            <P>{item}</P>
          ))
        }
      </div>
    );
  }
}
