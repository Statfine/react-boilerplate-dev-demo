import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Tooltip } from 'antd';
import {
  Item,
  VideoCotent, CoverBox, TopTip, BottomTop, ChoicenessDiv, AddFolderPng,
  DataContent, PriceContent, PriceP, DefaultPrice, PriceLimit, TitleP, TimeAndTag, TagsP, TimeP, BugAndShare, ActionBtn,
  AnasyContent,
 } from './styled';

import shopPng from './image/shop.png';
import shopPngHover from './image/shop_hover.png';
import sharePng from './image/share.png';
import cutPng from './image/cut.png';
import floderPng from './image/floder.png';

import VideoPlayer from './videoPlayer';

class VideoItem extends PureComponent {
  state = {
    enter: false,
  }

  componentDidUpdate() {
    const { enter, loading } = this.state;
    if (enter && !loading) {
      this.timer = setTimeout(() => {
        if (this.player) {
          this.player.play();
        }
      }, 500);
    }
  }

  handleSelect = () => {
    const target = document.querySelector('#material-select-animation-target');
    if (target && this.element) {
      this.element.style.display = 'block';
      this.element.style.zIndex = 1000;
      const { left, top } = target.getBoundingClientRect();
      const { left: x, top: y } = this.element.getBoundingClientRect();
      this.element.style.transform = `translate(${left -
        x -
        190 / 2 +
        5}px, ${top - y - 118 / 2 + 5}px) scale(0.25)`;
      this.element.style.opacity = 0;
      setTimeout(() => {
        this.element.style.display = 'none';
        this.element.style.transform = 'translate(0px, 0px) scale(1)';
        this.element.style.opacity = 1;
        this.element.style.width = '210px';
        this.element.style.height = '118px';
      }, 800);
    }
  };

  renderVideo = () => {
    const { enter } = this.state;
    return (
      <VideoCotent>
        <CoverBox innerRef={(ele) => (this.element = ele)}>
          <img src="https://vthumb.ykimg.com/054201015BED225C8B747593E569607D?x-oss-process=image/resize,m_pad,w_210,h_118,color_000000" alt="" />
        </CoverBox>
        <VideoPlayer
          play={enter}
          cover="https://vthumb.ykimg.com/054201015BED225C8B747593E569607D?x-oss-process=image/resize,m_pad,w_210,h_118,color_000000"
          playUrl="https://cloud-clip-out.oss-cn-hangzhou.aliyuncs.com/video/296e7a87-9763-4a59-a12a-a1a5861bd178/fd778c07-8ae0-4f71-9f24-e2f57db47254.mp4"
        />
        <TopTip>
          <ChoicenessDiv>精选</ChoicenessDiv>
          <ChoicenessDiv>原创</ChoicenessDiv>
        </TopTip>
        <BottomTop>
          <div></div>
          <AddFolderPng src={floderPng} />
        </BottomTop>
      </VideoCotent>
    );
  }

  renderPrice = () => true ?
    <PriceContent>
      <PriceP><span>&#165;</span>200.00</PriceP>
      <DefaultPrice dislable>200.00</DefaultPrice>
      <PriceLimit>限时</PriceLimit>
    </PriceContent> :
    <PriceContent>
      <PriceP>已购买</PriceP>
      <DefaultPrice>&#165;200.00</DefaultPrice>
    </PriceContent>

  renderBugShareCut = () => (
    <BugAndShare>
      {
        false && <ActionBtn background={shopPng} backgroundHover={shopPngHover}>
          <div className="icon"></div>
          <p>加入购物车</p>
        </ActionBtn>
      }
      {
        true && <ActionBtn onClick={this.handleSelect} background={cutPng} backgroundHover={shopPngHover}>
          <div className="icon"></div>
          <p>加入剪辑</p>
        </ActionBtn>
      }
      {
        true && <ActionBtn background={sharePng} backgroundHover={sharePng}>
          <div className="icon"></div>
          <p>分享</p>
        </ActionBtn>
      }
    </BugAndShare>
  )

  render() {
    return (
      <Item
        onMouseEnter={() => this.setState({ enter: true })}
        onMouseLeave={() => this.setState({ enter: false, preogress: 0 })}
      >
        {this.renderVideo()}
        <DataContent>
          {this.renderPrice()}
          <Tooltip title="想吃肉又怕长胖？这款墨西哥鸡肉塔可帮你解决&#91爱你] 蘸满酱想吃肉又怕蘸满酱想吃肉又怕长蘸满酱想吃肉又怕长" placement="bottomLeft">
            <TitleP>想吃肉又怕长胖？这款墨西哥鸡肉塔可帮你解决&#91爱你] 蘸满酱想吃肉又怕蘸满酱想吃肉又怕长蘸满酱想吃肉又怕长</TitleP>
          </Tooltip>
          <TimeAndTag>
            <TagsP>海外专题海外专题海外专题海外专题海外专题海外专题</TagsP>
            <Tooltip title="2018-10-10 10：10" placement="bottomRight">
              <TimeP>刚刚</TimeP>
            </Tooltip>
          </TimeAndTag>
          {this.renderBugShareCut()}
        </DataContent>
        <AnasyContent>采用量<span>999</span></AnasyContent>
      </Item>
    );
  }
}

VideoItem.propTypes = {
  videoData: PropTypes.object,
  handleShare: PropTypes.func,
  handleAddCut: PropTypes.func,
  handleAddShop: PropTypes.func,
};

export default VideoItem;
