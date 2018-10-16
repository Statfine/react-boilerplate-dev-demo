import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class WidthCom extends PureComponent {
  state = {};
  componentWillMount() {
    const width = this.getWidth();
    console.log('componentWillMount=>', width);
  }
  componentDidMount() {
    const width = this.textSpan.getBoundingClientRect().width;
    console.log('componentDidMount=>', width);
  }

  getWidth = (fontSize = 14) => {
    const span = document.createElement('span');

    document.body.appendChild(span);
    span.style.visibility = 'hidden';
    span.style.height = '0px';
    span.style.whiteSpace = 'nowrap';
    span.innerText = this.props.text;
    span.style.fontSize = `${fontSize}px`;
    const width = span.getBoundingClientRect().width;
    $(span).remove();

    return width;
  }

  render() {
    const { text } = this.props;
    return (
      <span
        ref={(c) => {
          this.textSpan = c;
        }}
      >
        {text}
      </span>
    );
  }
}

WidthCom.propTypes = {
  text: PropTypes.string,
};
