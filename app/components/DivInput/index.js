import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.div`
width: 250px;
min-height: 30px;
outline: none;
padding: 5px 14px;
border: 1px solid #E9E9E9;
box-shadow: 0 1px 2px 0 rgba(0,0,0,0.10);
border-radius: 2px;
caret-color: #F97835;
font-size: 12px;
&:empty:before {
  content:attr(placeholder);
  font-size: 12px;
  color: rgba(0, 0, 0, 0.22);
}
&:focus{
  content: none;
}
`;

export default class DivInput extends PureComponent {
  state = {
    value: this.props.value,
  }

  handleChange = () => {
    this.props.onChange(this.textInput.innerText);
  }

  publickOnFouce = () => {
    // this.textInput.focus();
    this.poLastDiv();
  }

  poLastDiv = () => {
    const obj = this.textInput;
    if (window.getSelection) { // ie11 10 9 ff safari
      obj.focus(); // 解决ff不获取焦点无法定位问题
      const range = window.getSelection(); // 创建range
      range.selectAllChildren(obj); // range 选择obj下所有子内容
      range.collapseToEnd(); // 光标移至最后
    } else if (document.selection) { // i e10 9 8 7 6 5
      const range = document.selection.createRange(); // 创建选择对象
      // var range = document.body.createTextRange();
      range.moveToElementText(obj); // range定位到obj
      range.collapse(false); // 光标移至最后
      range.select();
    }
  };

  createMarkup = (el) => { // eslint-disable-line
    return { __html: el };
  }

  render() {
    const { className, placeholder } = this.props;
    return (
      <Input
        className={className}
        placeholder={placeholder}
        innerRef={(ref) => { this.textInput = ref; }}
        contentEditable="true"
        onInput={this.handleChange}
        onBlur={this.handleChange}
        dangerouslySetInnerHTML={this.createMarkup(this.state.value)}
      />
    );
  }
}

DivInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};
