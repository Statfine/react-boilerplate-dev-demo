/**
 * Created by sj on 2017/8/21.
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import IcCut from 'material-ui/svg-icons/content/content-cut';
import IcDelete from 'material-ui/svg-icons/action/delete';
import IcAutorenews from 'material-ui/svg-icons/action/autorenew';
import { browserHistory } from 'react-router';
import DefaultCover from 'components/ImageLoader/default_cover.png';
import { MEDIA_SATUS, SOURCE_TYPE } from 'common/types';
import { Tool } from 'tool/timeTool';
import { codeToZh } from 'common/languages';

const ItemContainer = styled.div`
  height:98px;
  border-bottom: solid 1px #eeeeee;
  padding: 12px 0;
  margin: 0 30px;
  display: flex;
  align-items:center;
  color: #a9a9a9;
  cursor: pointer;
  &:last-child{
    border-bottom: 0px;
  }
`;

const ImgCover = styled.img`
  height:64px;
  width:100px;
  margin-right:50px;
`;

const TextInfo = styled.div`
  position:relative;
  flex-grow:3;
  height:100%;
  min-width: 250px;
  margin-right:50px;
`;

const TextInfoTitle = styled.div`
  position:absolute;
  overflow: hidden;
  white-space: nowrap ;
  text-overflow: ellipsis;
  width:100%;
  padding-right: 10px;
  top:0;
  color:#444444;
`;

const VideoInfoType = styled.div`
  width: 10%;
`;

const SvgContainer = styled.div`
 cursor: pointer;
 float: right;
`;

const TextInfoOther = styled.div`
  position:absolute;
  bottom:0;
  width: 100%;
  height: 21px;
  display: flex;
  & p {
    width:100px;
  }
`;

const StateP = styled.p`
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  position: absolute;
  top: 29px;
  white-space: nowrap ;
  text-overflow: ellipsis;
  width: 100%;
`;

const EachSubtitle = styled.p`
  margin-right: 10px;
  color: #ff8140;
  border: #ff8140 solid 1px;
  font-size: 12px;
  height: 16px;
  line-height: 14px;
  padding: 0 2px;
  border-radius: 2px;
`;

const VideoLengthInfo = styled.div`
  display: table-cell;
  vertical-align: middle;
  width: 12%;
`;

const VideoAction = styled.div`
  width:140px;
  margin-right: 8px;
  & svg {
    cursor:pointer;
    margin: 0 8px;
  }
`;

const DeleteBox = styled.div`
  width:30px;
  cursor:pointer;
  & svg{
    border-radius:2px;
    background-color: #f5f5f5;
    &:hover{
      background-color: #ed485b;
    }
}
`;

const CreateBox = styled.div`
  width:30px;
  margin-right:20px;
  cursor:pointer;
  & svg{
    border-radius:2px;
    background-color: #4885ed;
    &:hover{
      background-color: #2d70e1;
    }
  }
`;

const defaultShareState = ['未分享', '分享', '定时分享'];

function formatTime(t) {
  const m = parseInt(t / 60);
  const s = parseInt(t - (m * 60));
  return `${zeroFill(m)}:${zeroFill(s)}`;
}

function zeroFill(s) {
  if (s < 10 && s >= 0) return `0${s}`;
  return s;
}

class Item extends PureComponent {

  componentDidMount() {
    const { onFetchVideoState, video } = this.props;
    if (video.media_state === 1) onFetchVideoState(video.id);
  }

  createDelete(event, video) {
    event.stopPropagation();
    this.props.createDelete(video);
  }

  refesh(event, id) {
    event.stopPropagation();
    this.props.refesh(id);
  }

  render() {
    const { video } = this.props;
    return (
      <ItemContainer
        onClick={() => {
          if (video.source_type === 3) window.open(`/live/${video.id}`);
          else if (video.source_type === 8 || video.source_type === 9) window.open(`/imagedetails/${video.id}`);
          else window.open(`/videodetails/${video.id}`);
        }}
      >
        <ImgCover
          src={video.cover ? `${video.cover}?x-oss-process=image/resize,w_100,limit_0/crop,w_100,h_64,g_center&${Math.random()}` : DefaultCover}
          onClick={(e) => {
            e.stopPropagation();
            if (video.source_type === 3) browserHistory.push(`/live/${video.id}`);
            else if (video.source_type === 8 || video.source_type === 9) browserHistory.push(`/imagedetails/${video.id}`);
            else browserHistory.push(`/videodetails/${video.id}`);
          }}
        />
        <TextInfo title={video.title}>
          <TextInfoTitle title={video.title}>{video.title} </TextInfoTitle>
          {(Boolean(video.subtitles) && !!video.subtitles.length > 0) &&
          <Subtitle>
            {
              video.subtitles.map((itme, index) => <EachSubtitle title={codeToZh(itme)} key={index}>{itme}</EachSubtitle>)
            }
          </Subtitle>
          }
          <TextInfoOther>
            {(video.source_type !== 3 && parseInt(video.length) !== 0) && <p>{formatTime(video.length)} </p>}
            <p>{defaultShareState[video.shared]}</p>
            <StateP
              style={{
                color: video.media_state === 3 || video.media_state === 4 ? 'red' : 'unset',
              }}
            >
              {video.media_state === 3 ? video.message : MEDIA_SATUS[video.media_state]}
            </StateP>
          </TextInfoOther>
        </TextInfo>
        <VideoInfoType>
          {SOURCE_TYPE[video.source_type] || '视频'}
        </VideoInfoType>
        <VideoLengthInfo>
          {Tool.dataMonthDayHoursMin(video.create_time * 1000)}
        </VideoLengthInfo>
        <VideoAction>
          <SvgContainer onClick={(event) => this.createDelete(event, video)}>
            <DeleteBox title="删除">
              <IcDelete
                color="#fff"
                viewBox="-3 -3 30 30"
                style={{ width: '30px', height: '30px' }}
              />
            </DeleteBox>
          </SvgContainer>
          {(video.source_type !== 3 && video.source_type !== 8 && video.source_type !== 9) &&
          <SvgContainer
            onClick={(e) => {
              e.stopPropagation();
              window.open(`/cut/${video.id}`);
            }}
          >
            <CreateBox title="剪辑">
              <IcCut
                color="#fff"
                viewBox="-4 -4 32 32"
                style={{ width: '30px', height: '30px', transform: 'rotate(-90deg)' }}
              />
            </CreateBox>
          </SvgContainer>}
          {video.source_type === 1 && video.media_state === 3
            ? <SvgContainer onClick={(event) => this.refesh(event, video.id)}>
              <CreateBox title="重新抓取">
                <IcAutorenews
                  color="#fff"
                  viewBox="-3 -3 30 30"
                  style={{ width: '30px', height: '30px' }}
                />
              </CreateBox>
            </SvgContainer>
            : null}
        </VideoAction>
      </ItemContainer>
    );
  }
}

Item.propTypes = {
  video: PropTypes.object,
  createDelete: PropTypes.func,
  refesh: PropTypes.func,
  onFetchVideoState: PropTypes.func,
};

export default Item;
