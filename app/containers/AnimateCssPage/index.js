import React, { PureComponent } from 'react';
import { Button, Select } from 'antd';
import styled, { keyframes } from 'styled-components';

const AnimaleContent = styled.div`
  height: 40px;
  position: relative;
  margin-bottom: 20px;
  width: 1100px;
`;

const ScaleLine = styled.div`
  height: 1px;
  background: #f35626;
  position: absolute;
  bottom: -10px;
  width: 100%;
  display: flex;
`;

const AnimateP = styled.span`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 60s infinite linear;
  font-size: 24px;
`;

const FlexDiv = styled.div`
  display: flex;
`;

function ani(props) {
  return keyframes`
    from {
      transform: translateX(${props.startX}px);
    }
    to {
      transform: translateX(${props.moveLength}px);
    }
  `;
}

const AnimaleSpan = styled.span`
  width: 100px;
  border: 1px solid #4885ed;
  text-align: center;
  position: absolute;
  animation: ${(props) => props.isAnimale ? `${ani(props)} ${props.time}s linear` : ''};
`;

const Option = Select.Option;
const children = [];
for (let i = 0; i < 10; i += 1) {
  children.push(<Option key={i}>{i}</Option>);
}

const DEFAULT_TIME = 10; // 动画时间
const DEFAULT_MOVELENGTH = 1000; // 动画移动
const STYLE = {
  leftStyle: {
    marginLeft: '10px',
  },
};
class AnimateCssPage extends PureComponent { // eslint-disable-line
  state = {
    isAnimale: false,
    time: 0, // 秒
    moveLength: DEFAULT_MOVELENGTH, // 移动距离
    isStop: false,
  };

  componentDidMount() {
    this.AnimaleSpan.addEventListener('webkitAnimationEnd', () => {
      this.setState({ isAnimale: false });
    }, false);
  }

  handleStartAnima = () => {
    this.AnimaleSpan.style.animationPlayState = 'running';
    this.AnimaleSpan.style.WebkitAnimationPlayState = 'running';
    this.setState({ isAnimale: true, isStop: false });
  }
  handleResetAnima = () => {
    this.AnimaleSpan.style.animationPlayState = 'running';
    this.AnimaleSpan.style.WebkitAnimationPlayState = 'running';
    this.setState({ isAnimale: false, isStop: false });
  }
  handleStopAnima = () => {
    const { isStop } = this.state;
    if (isStop) {
      this.AnimaleSpan.style.animationPlayState = 'running';
      this.AnimaleSpan.style.WebkitAnimationPlayState = 'running';
    } else {
      this.AnimaleSpan.style.animationPlayState = 'paused';
      this.AnimaleSpan.style.WebkitAnimationPlayState = 'paused';
    }
    this.setState({ isStop: !isStop });
  }

  handleChangeTime = (value) => {
    this.setState({ time: value });
  }

  render() {
    const { isAnimale, time, moveLength, isStop } = this.state;
    return (
      <div>
        <AnimaleContent>
          <AnimaleSpan
            isAnimale={isAnimale}
            moveLength={moveLength}
            startX={(DEFAULT_MOVELENGTH / DEFAULT_TIME) * (time)}
            time={DEFAULT_TIME - time}
            innerRef={(c) => { this.AnimaleSpan = c; }}
          >
            <AnimateP>Animate</AnimateP>
          </AnimaleSpan>
          <ScaleLine />
        </AnimaleContent>
        <FlexDiv>
          <p>动画开始时间</p>
          <Select
            style={{ width: '120px' }}
            value={time}
            onChange={this.handleChangeTime}
          >
            {children}
          </Select>
          <Button type="primary" style={STYLE.leftStyle} onClick={this.handleStartAnima}>开始动画</Button>
          <Button type="primary" style={STYLE.leftStyle} onClick={this.handleResetAnima}>恢复</Button>
          <Button type="primary" style={STYLE.leftStyle} onClick={this.handleStopAnima}>{isStop ? '继续' : '暂停'}</Button>
        </FlexDiv>
      </div>
    );
  }
}

export default AnimateCssPage;
