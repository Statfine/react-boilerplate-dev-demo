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
import { timeToMSecond } from '../commom/tool';
import { ARRAY_RESOLUTION_RATIO, RESOLUTION_RATIO } from '../commom/config';

import { makeSelectProjectInfo, makeSelectVideoPlayer, makeSelectEffectVideo, makeSelectTrackInfo } from '../selectors';
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
  setFame = (fame) => {
    const { effectVideo } = this.props;
    const { startTime, endTime } = effectVideo;
    const currentTime = fame * (1 / 24);
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
    const { videoPlayerEl, projectInfo, effectVideo, trackInfo } = this.props;
    const { resolutionRatio } = projectInfo;
    const { curTime } = trackInfo;
    const { startTime, endTime } = effectVideo;
    const fameCounts = Math.ceil(curTime * 24);
    return (
      <ControlContent>
        <div />
        <FlexDiv>
          <TimeP>
            <TimeItem>{timeToMSecond(curTime)}</TimeItem>
            <div>fame:{fameCounts}</div>
          </TimeP>
          <IconBtns>
            <IconBtn><PointInSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" onClick={() => this.setPlaySeek(startTime)} /></IconBtn>
            <IconBtn><UpFrameSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" onClick={() => this.setFame(fameCounts - 1)} /></IconBtn>
            {
              videoPlayerEl.state === 0 && <IconBtn onClick={() => videoPlayerEl.videoEl.play()}><PlaySvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" /></IconBtn>
            }
            {
              videoPlayerEl.state === 1 && <IconBtn onClick={() => videoPlayerEl.videoEl.pause()}><PauseSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" /></IconBtn>
            }
            <IconBtn><NextFrameSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" onClick={() => this.setFame(fameCounts + 1)} /></IconBtn>
            <IconBtn><PointOutSvg style={{ width: 40, height: 40 }} viewBox="0 0 40 40" onClick={() => this.setPlaySeek(endTime)} /></IconBtn>
          </IconBtns>
        </FlexDiv>
        <SelectRatio>
          <Dropdown overlay={this.renderMenu()} placement="topCenter">
            <p>{RESOLUTION_RATIO[resolutionRatio].value} <Icon type="down" /></p>
          </Dropdown>
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
  trackInfo: PropTypes.object.isRequired,
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
  trackInfo: makeSelectTrackInfo(),
});

function mapDispatchToProps(dispatch) {
  return {
    actionChangeProjectInfo: (...arg) => dispatch(changeProjectInfo(...arg)),
    actionChangeVideoPlay: (...arg) => dispatch(changeVideoPlayer(...arg)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlCom);
