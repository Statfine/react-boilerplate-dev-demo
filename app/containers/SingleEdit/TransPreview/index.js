/**
 * 拖拽
 *  加载所有拖动特效
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';

import { makeSelectEffectVideo, makeSelectEffectImage } from '../selectors';

import TransVideo from '../TransCom/TransVideo';
import TransChartlet from '../TransCom/TransChartlet';

export const TransDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    content: '';
    display: ${({ showBaseLineX }) => showBaseLineX ? 'block' : 'none'};
    width: 100%;
    height: 2px;
    border-top: 1px dashed #FF8140;
    position: absolute;
    left: 0;
    top: 50%;
    margin-top: -1px;
    z-index: 99;
  }
  &:after {
    content: '';
    display: ${({ showBaseLineY }) => showBaseLineY ? 'block' : 'none'};
    width: 2px;
    height: 100%;
    border-left: 1px dashed #FF8140;
    position: absolute;
    left: 50%;
    top: 0;
    margin-left: -1px;
    z-index: 99;
  }
`;

class TransPreview extends PureComponent {
  state = {
    isShowBaseLineX: false,
    isShowBaseLineY: false,
  }

  // 敲黑板，如果只显示当前选中的拖拽组件可以用如下方法
  // 选中可以通过 获取点击的位置，遍历得到哪些特效。更近层级关系获取层级最高的。
  handlePreviewDivMouseUp = (ev) => {
    ev.stopPropagation();
    const { effectVideo, effectImage } = this.props;
    const rect = this.previewDiv.getBoundingClientRect();
    console.log(rect, ev.clientX, ev.clientY);
    const evPointX = ev.clientX - rect.x;
    const evPointY = ev.clientY - rect.y;
    console.log('点击点', evPointX);
    const previewStyle = { width: rect.width, height: rect.height };

    const videoSection = this.handleEffectSection(effectVideo.position, previewStyle);
    console.log('effectVideo Section', videoSection);
    const effectList = []; // 所在区间的特效
    // 判断视频
    if ((evPointX >= videoSection.startX && evPointX <= videoSection.endX)
      && (evPointY >= videoSection.startY && evPointY <= videoSection.endY)
    ) {
      console.log('选中了视频');
      effectList.push(effectVideo);
    }
    // 判断贴图
    effectImage.map((item) => {
      const effectSection = this.handleEffectSection(item.position, previewStyle);
      if ((evPointX >= effectSection.startX && evPointX <= effectSection.endX)
        && (evPointY >= effectSection.startY && evPointY <= effectSection.endY)
      ) {
        console.log('选中当前', item);
        effectList.push(item);
      }
      return null;
    });
    console.log('选中了', effectList);
  }

  // 特效区间(基于预览区域的顶点(TransDiv))
  handleEffectSection = (position, previewStyle) => {
    console.log('position', position, previewStyle);
    let startX = 0;
    let endX = 0;
    let startY = 0;
    let endY = 0;
    if (position.x < 0) startX = 0;
    else startX = position.x;
    endX = startX + position.w;
    if (position.x < 0) startY = 0;
    else startY = position.y;
    endY = startY + position.h;
    const params = {
      startX: startX * 0.01 * previewStyle.width,
      endX: endX * 0.01 * previewStyle.width,
      startY: startY * 0.01 * previewStyle.height,
      endY: endY * 0.01 * previewStyle.height,
    };
    return params;
  }

  render() {
    const { isShowBaseLineX, isShowBaseLineY } = this.state;
    return (
      <TransDiv
        innerRef={(ref) => this.previewDiv = ref}
        showBaseLineX={isShowBaseLineX}
        showBaseLineY={isShowBaseLineY}
        onMouseUp={this.handlePreviewDivMouseUp}
      >
        <TransVideo
          handleShowBaseLine={(lineParams) => {
            this.setState({
              isShowBaseLineX: lineParams.showLineX,
              isShowBaseLineY: lineParams.showLineY,
            });
          }}
        />
        <TransChartlet
          handleShowBaseLine={(lineParams) => {
            this.setState({
              isShowBaseLineX: lineParams.showLineX,
              isShowBaseLineY: lineParams.showLineY,
            });
          }}
        />
      </TransDiv>
    );
  }
}

/**
 *  effectVideo 视频特效 （位置）
 *  effectImage 贴图特效 （位置）
*/
TransPreview.propTypes = {
  effectVideo: PropTypes.object.isRequired,
  effectImage: PropTypes.array.isRequired,
};

const mapStateToProps = createStructuredSelector({
  effectVideo: makeSelectEffectVideo(),
  effectImage: makeSelectEffectImage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TransPreview);
