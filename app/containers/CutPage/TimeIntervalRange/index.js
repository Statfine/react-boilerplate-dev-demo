import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tool } from 'tool/timeTool';
import File from './film_s.png';
import CoverBac from '../TimeInterval/bacCom';

const TimeContent = styled.div`
  width: 542px;
  height: 20px;
  border: 1px solid #e0e0e0;
  position: relative;
  background-color: #f4f8fe;
  margin-top: 10px;
`;

const VideoImage = styled.div`
  width: ${(props) => `${props.width}px`};
  height: 20px;
  margin-left: ${(props) => `${props.left}px`};
  position: relative;
`;

// const ImageRe = styled.div`
//   width: 100%;
//   height: 20px;
//   background-image: ${(props) => `url(${props.src})`};
//   background-repeat: repeat;
//   background-position-y: -1px;
// `;

const CoverBacCOm = styled(CoverBac)`
  width: 100%;
  height: 20px;
  background-repeat: repeat;
  background-position-y: -1px;
`;

const ActionContent = styled.div`
  top: -1px;
  bottom: 0;
  left: 0;
  right: 0;
  height: 20px;
  position: absolute;
  border-top: 1px solid #4a74d2;
  border-bottom: 1px solid #4a74d2;
  cursor: pointer;
`;

const Leftlab = styled.div`
  width: 2px;
  height: 18px;
  cursor: ew-resize;
  left: 0px;
  position: absolute;
  background-color: #21e5a7;
`;

const Rightlab = styled.div`
  width: 2px;
  height: 18px;
  cursor: ew-resize;
  right: 0px;
  position: absolute;
  background-color: #ff8140;
`;

const Drag = styled.div`
  &:before {
    content: '';
    position: absolute;
    left: -2px;
    top: 4px;
    width: 6px;
    height: 10px;
    background: ${({ color }) => `${color}`}
  }
`;

const TopTimeShow = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -35px;
  left: 0px;
  background: #fff;
  width: 100%;
  font-size: 16px;
`;

const TimeShow = styled.div`
  width: 542px;
  display: flex;
  justify-content: ${({ beginTime }) => beginTime ? 'space-between' : 'center'};
`;

const defaultWidth = 542;

export default class TimeIntervalRange extends PureComponent {

  state = {
    length: this.props.length,
    st: this.props.st,
    et: this.props.et,
    showLeftTime: false,
    showRightTime: false,
  }

  onMouseDown = (e, type) => {
    e.stopPropagation();
    this.dragOffset = e.pageX;
    this.type = type;
    this.source = this.state;
    this.setState({ dragDown: true, showLeftTime: type === 'left' || type === 'middle', showRightTime: type === 'right' || type === 'middle' });
    document.addEventListener('mousemove', (ev) =>
      this.state.dragDown ? this.handleMouseMove(ev, type) : ''
    );
  };
  source;

  /**
   * ev: 鼠标事件对象
   * obj: 参考对像（判断鼠标与时间轴距离）
   */
  handleMouseMove = (ev) => {
    const { st, et, length } = this.source;
    const x = ev.clientX;
    const minLength = (length * 10) / defaultWidth;
    const moveWidth = x - this.dragOffset;
    const moveTime = (length * moveWidth) / defaultWidth;
    if (!this.state.dragDown) return;
    if (this.type === 'left') {
      const overStTime = st + moveTime;
      let setSt = et - minLength;
      if (overStTime > 0) {
        if (overStTime < et - minLength) setSt = overStTime;
      } else {
        setSt = 0;
      }
      this.setState({ st: setSt });
    } else if (this.type === 'right') {
      const overEtTime = et + moveTime;
      let setEt = st + minLength;
      if (overEtTime < length) {
        if (overEtTime > st + minLength) setEt = overEtTime;
      } else {
        setEt = length;
      }
      this.setState({ et: setEt });
    } else {
      const currentLength = et - st;
      let setSt = st + moveTime;
      let setEt = et + moveTime;
      if (moveTime > 0) { // 右移动
        if (et + moveTime > length) {
          setSt = length - currentLength;
          setEt = length;
        }
      } else if (st + moveTime < 0) {
        setSt = 0;
        setEt = currentLength;
      }
      this.setState({ st: setSt, et: setEt });
    }

    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseUp = () => {
    const { st, et } = this.state;
    if (this.state.dragDown) {
      // this.setState({ dragDown: false, showLeftTime: false, showRightTime: false });
      this.setState({ dragDown: false });
      const defaultData = {
        length: et - st,
        startTime: st,
        endTime: et,
        startCutTime: st,
        endCutTime: et,
      };
      this.props.handleRangeChange(defaultData);
    }
  }

  render() {
    const { className, beginTime } = this.props;
    const { st, et, length, showLeftTime, showRightTime } = this.state;
    const one = defaultWidth / length;

    return (
      <div style={{ marginBottom: 20 }}>
        <TimeContent className={className}>
          {
            (showLeftTime || showRightTime) &&
            <TopTimeShow>
              <p>{Tool.formatHourMinSec(st)}</p>
              <p>{Tool.formatHourMinSec(et)}</p>
            </TopTimeShow>
          }
          <VideoImage width={one * (et - st)} left={one * st}>
            <CoverBacCOm src={File} />
            <ActionContent onMouseDown={(e) => this.onMouseDown(e, 'middle')}>
              <Leftlab innerRef={(c) => { this.left = c; }} onMouseDown={(e) => this.onMouseDown(e, 'left')}>
                <Drag color={'#21e5a7'} />
                {showLeftTime && <p style={{ marginLeft: '-60px', color: '#999', width: '70px' }}>{Tool.formatHourMinSec(st)}</p>}
              </Leftlab>
              <Rightlab innerRef={(c) => { this.right = c; }} onMouseDown={(e) => this.onMouseDown(e, 'right')}>
                <Drag color={'#ff8140'} />
                {showRightTime && <p style={{ marginLeft: '8px', color: '#999', width: '70px' }}>{Tool.formatHourMinSec(et)}</p>}
              </Rightlab>
            </ActionContent>
          </VideoImage>
        </TimeContent>
        <TimeShow beginTime={beginTime}>
          { !!beginTime && <p>{Tool.dataMonthDayHoursMin(beginTime * 1000, true)}</p> }
          <p>总时长{Tool.formatHourMinSec(length)}</p>
          { beginTime && <p>{Tool.dataMonthDayHoursMin((beginTime + length) * 1000, true)}</p> }
        </TimeShow>
      </div>
    );
  }
}

TimeIntervalRange.propTypes = {
  length: PropTypes.number,
  st: PropTypes.number,
  et: PropTypes.number,
  handleRangeChange: PropTypes.func,
  beginTime: PropTypes.number,
  className: PropTypes.string,
};
