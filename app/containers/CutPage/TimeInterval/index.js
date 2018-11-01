import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IcAdd from 'material-ui/svg-icons/content/add-circle-outline';
import IcRemove from 'material-ui/svg-icons/content/remove-circle-outline';
import IcRefresh from 'material-ui/svg-icons/navigation/refresh';
import { Tool } from 'tool/timeTool';

import File from './film.png';
import CoverBac from './bacCom';
import TimeIntervalRange from '../TimeIntervalRange';

const Content = styled.div`
`;

const TimeActionContent = styled.div`
  display: flex;
`;

const VideoTimeContent = styled.div`
  height: 70px;
  border: 2px dashed #e0e0e0;
  position: relative;
  width: 542px;
`;

const VideoImage = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 70px;
  overflow: hidden;
  margin-left: ${(props) => `${props.left}px`};
  margin-top: -2px;
  position: relative;
  cursor: pointer;
`;

const DragContent = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  border-top: 3px solid #363b3d;
  border-bottom: 3px solid #363b3d;
`;

const Leftlab = styled.div`
  width: 15px;
  height: 64px;
  cursor: ew-resize;
  left: 0px;
  position: absolute;
  background-color: #363b3d;
`;

const Rightlab = styled.div`
  width: 15px;
  height: 64px;
  cursor: ew-resize;
  right: 0px;
  position: absolute;
  background-color: #363b3d;
`;

const Drag = styled.div`
  width: 5px;
  margin: 12px auto;
  height: 40px;
  position: relative;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    top:0;
    width: 1px;
    height: 40px;
    background: ${({ color }) => `${color}`};
  }
  &:after {
    content: '';
    position: absolute;
    left: 4px;
    top:0;
    width: 1px;
    height: 40px;
    background: ${({ color }) => `${color}`};
  }
`;

const CoverBacCom = styled(CoverBac)`
  width: 100%;
  height: 64px;
  margin-top: 3px;
`;

const SetTime = styled.p`
  color: #fff;
  position: absolute;
  top: -30px;
  width: 80px;
  height: 24px;
  line-height: 24px;
  font-size: 16px;
  text-align: center;
  border-radius: 2px;
  font-weight: 200;
  left: ${({ left }) => `${left}px`};
  background: ${({ color }) => `${color}`};
`;

const TimeContent = styled.div`
  width: 542px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  padding: 0 1px;
`;

const ActionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 70px;
  visibility: ${({ show }) => show ? 'visible' : 'hidden'}
  margin-left: -1px;
  margin-right: 1px;
`;

const Btn = styled.button`
  width: 30px;
  height: 33%;
  text-agign: right;
  outline: none;;
  & svg {
    cursor: pointer;
    width: 20px!important;
    height: 20px!important;
  }
`;

const defaultWidth = 542;

export default class TimeInterval extends PureComponent {

  onMouseDown = (e, type) => {
    e.stopPropagation();
    document.body.style.userSelect = 'none';
    document.body.style.webkitUserSelect = 'none';
    document.body.style.msUserSelect = 'none';
    document.body.style.mozUserSelect = 'none';
    this.dragOffset = e.pageX;
    this.type = type;
    this.source = this.props.timeCutData;
    this.setState({ dragDown: true });
    this.clickFlag = true;
    // 匿名函数会导致事件叠加
    // document.addEventListener('mousemove', (ev) => this.state.dragDown ? this.handleMouseMove(ev, type) : '');
    // document.addEventListener('mousemove', (ev) => this.handleMouseMove(ev, type));
    document.addEventListener('mousemove', this.handleMouseMove);
  };

  getOffsetLeft(obj) {
    let tmp = obj.offsetLeft;
    let val = obj.offsetParent;
    while (val != null) {
      tmp += val.offsetLeft;
      val = val.offsetParent;
    }
    return tmp;
  }
  source;
  enlargeArray = [];
  clickFlag = true; // mouse 和click事件判断

  handlLarge = () => {
    const { startCutTime, endCutTime } = this.props.timeCutData;
    const data = {
      length: endCutTime - startCutTime,
      startTime: startCutTime,
      endTime: endCutTime,
      startCutTime,
      endCutTime,
    };
    this.enlargeArray.push(this.props.timeCutData);
    this.props.handleChangeTime(data);
  }

  handleSmall = () => {
    const zoom = this.enlargeArray.pop();
    this.props.handleChangeTime(zoom);
  };

  handleReset = () => {
    const { totalLength } = this.props;
    this.enlargeArray = [];
    const defaultData = {
      length: totalLength,
      startTime: 0,
      endTime: totalLength,
      startCutTime: 0,
      endCutTime: totalLength,
    };
    this.props.handleChangeTime(defaultData);
  }

  /**
   * ev: 鼠标事件对象
   * obj: 参考对像（判断鼠标与时间轴距离）
   */
  handleMouseMove = (ev) => {
    console.log('handleMouseMove');
    ev.stopPropagation();
    const { handleChangeTime } = this.props;
    const { startTime, endTime, startCutTime, endCutTime, length } = this.source;
    const minLength = (length * 30) / defaultWidth;
    const x = ev.clientX;
    const moveWidth = x - this.dragOffset;
    const moveTime = (length * moveWidth) / defaultWidth;
    if (!this.state.dragDown) return;
    if (this.type === 'left') {
      const overStTime = startCutTime + moveTime;
      if (overStTime >= startTime) {
        if (overStTime < endCutTime - minLength) {
          handleChangeTime({ startCutTime: overStTime });
        } else {
          handleChangeTime({ startCutTime: endCutTime - minLength });
        }
      } else {
        handleChangeTime({ startCutTime: startTime });
      }
    } else if (this.type === 'right') {
      const overEtTime = endCutTime + moveTime;
      if (overEtTime <= endTime) {
        if (overEtTime > startCutTime + minLength) {
          handleChangeTime({ endCutTime: overEtTime });
        } else {
          handleChangeTime({ endCutTime: startCutTime + minLength });
        }
      } else {
        handleChangeTime({ endCutTime: endTime });
      }
    } else {
      if (Math.abs(parseInt(moveWidth)) > 1) this.clickFlag = false;
      const currentLength = endCutTime - startCutTime;
      let setSt = startCutTime + moveTime;
      let setEt = endCutTime + moveTime;
      if (moveTime > 0) { // 右移动
        if (endCutTime + moveTime > endTime) {
          setSt = endTime - currentLength;
          setEt = endTime;
        }
      } else if (startCutTime + moveTime < startTime) {
        setSt = startTime;
        setEt = startTime + currentLength;
      }
      handleChangeTime({ endCutTime: setEt, startCutTime: setSt });
    }

    document.addEventListener('mouseup', this.handleMouseUp);
    // document.addEventListener('mouseup', () => this.handleMouseUp());
  }

  handleMouseUp = () => {
    console.log('handleMouseUp');
    if (this.state.dragDown) {
      document.body.style.userSelect = '';
      document.body.style.webkitUserSelect = '';
      document.body.style.msUserSelect = '';
      document.body.style.mozUserSelect = '';
      this.setState({ dragDown: false });
      document.removeEventListener('mouseup', this.handleMouseUp);
      document.removeEventListener('mousemove', this.handleMouseMove);
    }
  }

  // 区间选择
  handleRangeChange = (data) => {
    this.props.handleChangeTime(data);
  }

  handleSeekClick = (event) => {
    if (!this.clickFlag) return;
    const { publickSeekTimeCut, timeCutData } = this.props;
    const { startCutTime, length } = timeCutData;
    const palyTime = startCutTime + ((length / defaultWidth) * (event.pageX - this.getOffsetLeft(this.timeCutProgress)));
    if (publickSeekTimeCut) publickSeekTimeCut(palyTime);
  }

  render() {
    const { startTime, endTime, startCutTime, endCutTime, length } = this.props.timeCutData;
    const one = defaultWidth / length;
    const { totalLength, beginTime } = this.props;

    return (
      <Content>
        <TimeActionContent>
          <VideoTimeContent>
            <SetTime color="#21e5a7" left={(one * (startCutTime - startTime)) - 70}>{Tool.formatHourMinSec(startCutTime)}</SetTime>
            <SetTime color="#ff8140" left={(one * (endCutTime - startTime)) - 10}>{Tool.formatHourMinSec(endCutTime)}</SetTime>
            <VideoImage onMouseDown={(e) => this.onMouseDown(e, 'middle')} width={one * (endCutTime - startCutTime)} left={(one * (startCutTime - startTime)) - 2}>
              <CoverBacCom src={File} />
              <DragContent innerRef={(ref) => { this.timeCutProgress = ref; }} onClick={(e) => this.handleSeekClick(e)}>
                <Leftlab innerRef={(c) => { this.left = c; }} onClick={(e) => e.stopPropagation()} onMouseDown={(e) => this.onMouseDown(e, 'left')}>
                  <Drag color={'#21e5a7'} />
                </Leftlab>
                <Rightlab innerRef={(c) => { this.right = c; }} onClick={(e) => e.stopPropagation()} onMouseDown={(e) => this.onMouseDown(e, 'right')}>
                  <Drag color={'#ff8140'} />
                </Rightlab>
              </DragContent>
            </VideoImage>
          </VideoTimeContent>
          <ActionContent show={parseInt(endCutTime) - parseInt(startCutTime) >= 30 || this.enlargeArray.length > 0}>
            <Btn onClick={this.handlLarge} disabled={parseInt(endCutTime) - parseInt(startCutTime) < 30}>
              <IcAdd color={parseInt(endCutTime) - parseInt(startCutTime) >= 30 ? '#4885ed' : '#7f7f7f'} />
            </Btn>
            <Btn onClick={this.handleSmall} disabled={this.enlargeArray.length === 0}>
              <IcRemove color={this.enlargeArray.length ? '#4885ed' : '#7f7f7f'} />
            </Btn>
            <Btn onClick={this.handleReset} disabled={this.enlargeArray.length === 0}>
              <IcRefresh color={this.enlargeArray.length ? '#4885ed' : '#7f7f7f'} />
            </Btn>
          </ActionContent>
        </TimeActionContent>
        <TimeContent>
          <p>{Tool.formatHourMinSec(startTime)}</p>
          <p>{Tool.formatHourMinSec(endTime)}</p>
        </TimeContent>
        <TimeIntervalRange
          length={totalLength}
          st={startCutTime}
          et={endCutTime}
          handleRangeChange={this.handleRangeChange}
          beginTime={beginTime}
        />
      </Content>
    );
  }
}

/*
 * totalLength总时长
 * timeCutData {length: 当前总长度, startTime: 当前开始时间, endTime: 当前结束时间, startCutTime: 剪切开始时间, endCutTime: 剪切结束时间,}
 */
TimeInterval.propTypes = {
  totalLength: PropTypes.number,
  beginTime: PropTypes.number,
  timeCutData: PropTypes.object,
  publickSeekTimeCut: PropTypes.func,
  handleChangeTime: PropTypes.func,
};
