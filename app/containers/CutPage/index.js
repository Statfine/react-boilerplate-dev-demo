import React, { PureComponent } from 'react';
import { merge } from 'lodash';
import { BasePage } from 'containers/BasePage';
import ReactTransitionGroup from 'react-transition-group/TransitionGroup';
import styled, { keyframes } from 'styled-components';
import 'react-tippy/dist/tippy.css';
import { Tooltip } from 'react-tippy';
import TimeInterval from './TimeInterval';
import SonComponents from './SonComLife';

const showA = keyframes`
  0% {margin-top: -50px; display: block; opacity:0}
  100% {margin-top: 0px; opacity:1}
`;

const hiddenA = keyframes`
  0% {margin-top: 0px; opacity:1}
  100% {margin-top: -50px; opacity:0}
`;

const CutComtent = styled.div`
  padding: 60px;
  animation: ${({ show }) =>
    show ? `${showA} 1s linear forwards` : `${hiddenA} 0.5s linear forwards`};
`;

class CutPage extends PureComponent {
  state = {
    playBackInfo: {
      length: 3600,
      begin_time: 0,
      stream_id: '',
      stream_url: '',
    },
    timeCutData: {
      length: 3600,
      startTime: 0,
      endTime: 3600,
      startCutTime: 0,
      endCutTime: 600,
    },
    hidden: false,
    showSon: false,
  };

  handleToggle = () => {
    const { hidden } = this.state;
    this.setState({ hidden: !hidden });
  };

  render() {
    const { playBackInfo, timeCutData, hidden, showSon } = this.state;

    return (
      <div>
        <CutComtent show={!hidden}>
          <TimeInterval
            totalLength={parseInt(playBackInfo.length)}
            beginTime={playBackInfo.begin_time}
            timeCutData={timeCutData}
            handleChangeTime={(data) => {
              this.setState({ timeCutData: merge({}, timeCutData, data) });
              if (data.startCutTime) console.log(data.startCutTime);
              else console.log(data.endCutTime - 2);
            }}
            publickSeekTimeCut={(time) => console.log(`time====>${time}`)}
            cutDisabled={false}
          />
        </CutComtent>
        <div onClick={this.handleToggle}>{hidden ? '打开' : '关闭'}</div>
        <div style={{ display: 'flex' }}>
          <Tooltip
            title="Welcome to React"
            position="bottom"
            trigger="mouseenter"
          >
            <div style={{ width: 200 }}>hover here to show popup</div>
          </Tooltip>
        </div>
        <div onClick={() => this.setState({ showSon: !showSon })}>{showSon ? '移除动画' : '开启动画'}</div>
        <ReactTransitionGroup>
          {
            showSon && <SonComponents />
          }
        </ReactTransitionGroup>
      </div>
    );
  }
}

export default BasePage(CutPage);
