/**
 *
 *  ControlCom 控制器
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Menu, Icon } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ToolTip from 'components/ToolTip';
import { timeToMSecond } from '../commom/tool';
import { ARRAY_RESOLUTION_RATIO, RESOLUTION_RATIO } from '../commom/config';

import { makeSelectProjectInfo, makeSelectVideoPlayer, makeSelectEffectVideo } from '../selectors';
import { changeProjectInfo, changeVideoPlayer } from '../actions';

import { PlaySvg, PointOutSvg, PointInSvg, UpFrameSvg, NextFrameSvg, PauseSvg } from '../images/icon/svg';

import { ControlContent, FlexDiv, IconBtn, TimeP, SelectRatio, IconBtns, TimeItem } from './styled';

export class ControlCom extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  // 设置播放
  setPlaySeek = (currentTime) => {
    const { videoPlayerEl, actionChangeVideoPlay, effectVideo } = this.props;
    const { startTime } = effectVideo;
    videoPlayerEl.videoEl.pause();
    videoPlayerEl.videoEl.seek(currentTime - startTime);
    actionChangeVideoPlay({ state: 0, currentTime: currentTime - startTime });
  }

  // 设置播放帧数
  setFrame = (frame) => {
    const { effectVideo } = this.props;
    const { startTime, endTime } = effectVideo;
    const currentTime = frame * (1 / 24);
    if (currentTime < startTime) this.setPlaySeek(startTime);
    else if (currentTime > endTime) this.setPlaySeek(endTime);
    else this.setPlaySeek(currentTime);
  }

  renderMenu = () => (
    <Menu>
      {ARRAY_RESOLUTION_RATIO.map((item) => (
        <Menu.Item
          key={item.key}
          style={{ padding: '5px 12px' }}
          onClick={() => this.props.actionChangeProjectInfo({ resolutionRatio: item.key })}
        >
          {item.value}
        </Menu.Item>))}
    </Menu>
  )

  render() {
    const { videoPlayerEl, projectInfo, effectVideo } = this.props;
    const { resolutionRatio } = projectInfo;
    const { currentTime } = videoPlayerEl;
    const { startTime, endTime } = effectVideo;
    const curTime = currentTime + startTime;
    const frameCounts = Math.ceil(curTime * 24);
    return (
      <ControlContent>
        <div />
        <FlexDiv>
          <TimeP>
            <TimeItem>{timeToMSecond(curTime)}</TimeItem>
            <div>frame:{frameCounts}</div>
          </TimeP>
          <IconBtns>
            <ToolTip title="跳转到入点" offsetLeft={-18}>
              <IconBtn><PointInSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" onClick={() => this.setPlaySeek(startTime)} /></IconBtn>
            </ToolTip>
            <ToolTip title="前一帧" offsetLeft={-8}>
              <IconBtn><UpFrameSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" onClick={() => this.setFrame(frameCounts - 1)} /></IconBtn>
            </ToolTip>
            {
              videoPlayerEl.state === 0 && <ToolTip title="播放">
                <IconBtn onClick={() => videoPlayerEl.videoEl.play()}><PlaySvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" /></IconBtn>
              </ToolTip>
            }
            {
              videoPlayerEl.state === 1 && <ToolTip title="暂停">
                <IconBtn onClick={() => videoPlayerEl.videoEl.pause()}><PauseSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" /></IconBtn>
              </ToolTip>
            }
            <ToolTip title="后一帧" offsetLeft={-8}>
              <IconBtn><NextFrameSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" onClick={() => this.setFrame(frameCounts + 1)} /></IconBtn>
            </ToolTip>
            <ToolTip title="跳转到出点" offsetLeft={-18}>
              <IconBtn><PointOutSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" onClick={() => this.setPlaySeek(endTime)} /></IconBtn>
            </ToolTip>
          </IconBtns>
        </FlexDiv>
        <SelectRatio>
          {
            resolutionRatio !== '' && <Dropdown overlay={this.renderMenu()} placement="topCenter">
              <p>{RESOLUTION_RATIO[resolutionRatio].value} <Icon type="down" /></p>
            </Dropdown>
          }
        </SelectRatio>
      </ControlContent>
    );
  }
}

/**
 *  projectInfo 项目信息(分辨率)
 *  videoInfo 视频详情（纯数据）
 * videoPlayerEl 视频实例对象 控制播放相关
*/
ControlCom.propTypes = {
  // trackInfo: PropTypes.object.isRequired,
  projectInfo: PropTypes.object.isRequired,
  effectVideo: PropTypes.object.isRequired,
  actionChangeProjectInfo: PropTypes.func.isRequired,
  videoPlayerEl: PropTypes.object.isRequired,
  actionChangeVideoPlay: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  projectInfo: makeSelectProjectInfo(),
  videoPlayerEl: makeSelectVideoPlayer(),
  effectVideo: makeSelectEffectVideo(),
  // trackInfo: makeSelectTrackInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeProjectInfo: (...arg) => dispatch(changeProjectInfo(...arg)),
    actionChangeVideoPlay: (...arg) => dispatch(changeVideoPlayer(...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlCom);
