/**
 *
 * VideoMosaicPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Icon, Button, Spin } from 'antd';
import _ from 'lodash';
import guid from 'utils/guid';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import Transformable from 'components/Transformable';
import reducer from './reducer';
import saga from './saga';

import { fetchVideoAnalyse } from './actions';
import * as selector from './selectors';

import {
  Container,
  DataList, DataListHeader, Item, ListContent, List, DeleteP,
  VideoContent, Video,
  CoverContaier, TopAction, CoverContent, CoverPic, MosaicPicContent, ImgContent,
} from './styled';

// const propType = {
//   item: PropTypes.object,
//   src: PropTypes.string,
//   onClick: PropTypes.func,
// };
// const Selected = ({ item, src, onClick }) => (
//   <Select item={item} src={src} onClick={onClick} />
// );

// Selected.propTypes = propType;

const defaultImg = [
  'https://image.clip.cn/clip_website_images/image/mosaic1.png',
  'https://image.clip.cn/clip_website_images/image/mosaic2.png',
];
export class VideoMosaicPage extends React.PureComponent {
  state = {
    choosedImgIndex: [], // 选中的图片下标
    choosedImgIndexMosaicList: [], // 选中的图片的数据
    showList: [], // 显示的数据
    defaultImgIndex: 0,
    dragId: '',
  }
  // componentWillMount() {
  // }
  handleClickFetch = () => this.props.actionFetchVideoAnalyse();
  // 获取选中图片的数据
  handleClickSelectImg = (index) => {
    const choosedImgIndex = this.state.choosedImgIndex.concat();
    const ListIndex = _.findIndex(choosedImgIndex, (o) => o === index);
    if (ListIndex === -1) {
      choosedImgIndex.push(index);
      this._changeMosc(index, true);
    } else {
      choosedImgIndex.splice(ListIndex, 1);
      this._changeMosc(index, false);
    }
    this.setState({ choosedImgIndex });
  }
  _changeMosc = (index, flag) => {
    const { slelectOriList } = this.props;
    if (flag) {
      const list = [];
      const scale = 1;
      slelectOriList[index].map((item) => {
        list.push({ id: guid(), imgIndex: index, st: item[0], et: item[1], x: item[2] / scale, y: item[3] / scale, w: item[4] / scale, h: item[5] / scale });
        return list;
      });
      const choosedImgIndexMosaicList = this.state.choosedImgIndexMosaicList.concat(list);
      this.setState({ choosedImgIndexMosaicList });
    } else {
      const choosedImgIndexMosaicList = _.filter(this.state.choosedImgIndexMosaicList, (o) => o.imgIndex !== index);
      this.setState({ choosedImgIndexMosaicList });
    }
  }
  // 播放器时间变更，获取显示的数据
  handleVideoTimeChange = () => {
    console.log(this.video.currentTime);
    Promise.resolve(
      this._handleGetList()
    ).then((showList) => {
      this.setState({ showList });
    });
  }

  _handleGetList = () => {
    const showList = this.state.choosedImgIndexMosaicList.filter((v) => (v.st * 0.001).toFixed(3) <= this.video.currentTime.toFixed(3) && (v.et * 0.001).toFixed(3) >= this.video.currentTime.toFixed(3));
    return showList;
  };
  handelClickChoosedSelected = (item) => {
    this.setState({ dragId: item.id });
    // const choosedImgIndexMosaicList = this.state.choosedImgIndexMosaicList.concat();
    // const ListIndex = _.findIndex(choosedImgIndexMosaicList, (o) => o.id === item.id);
    // console.log(ListIndex);
    // choosedImgIndexMosaicList[ListIndex] = _.merge({}, choosedImgIndexMosaicList[ListIndex], { drag: true });
    // this.setState({ choosedImgIndexMosaicList }, () => this.handleVideoTimeChange());
  };
  handleChangeConfig = (val, item) => {
    console.log('handleChangeConfig', val);
    const choosedImgIndexMosaicList = this.state.choosedImgIndexMosaicList.concat();
    const ListIndex = _.findIndex(choosedImgIndexMosaicList, (o) => o.id === item.id);
    console.log(ListIndex);
    choosedImgIndexMosaicList[ListIndex] = _.merge({}, choosedImgIndexMosaicList[ListIndex], val);
    this.setState({ choosedImgIndexMosaicList }, () => this.handleVideoTimeChange());
  }
  render() {
    const { slelectImgUrlList, slelectVideoInfo, slelectRequrestingBool } = this.props;
    const { showList, choosedImgIndex, choosedImgIndexMosaicList, defaultImgIndex, dragId } = this.state;
    console.log(choosedImgIndexMosaicList, showList);
    return (
      <Container>
        <DataList>
          <DataListHeader>
            <Item width={20}></Item>
            <Item width={110}>开始时间</Item>
            <Item width={110}>结束时间</Item>
            <Item width={50}>撤销</Item>
          </DataListHeader>
          <ListContent>
            {
              choosedImgIndexMosaicList.map((item, index) => (
                <List
                  key={item.id}
                  choosed={dragId === item.id}
                  onClick={() => {
                    this.setState({ dragId: '' });
                    this.video.currentTime = (item.st * 0.001).toFixed(3);
                  }}
                >
                  <Item width={20}>{index + 1}</Item>
                  <Item width={110}>{item.st}</Item>
                  <Item width={110}>{item.et}</Item>
                  <Item width={50}><DeleteP>撤销</DeleteP></Item>
                </List>
              ))
            }
          </ListContent>
        </DataList>
        <VideoContent>
          <Video
            id="video"
            innerRef={(c) => { this.video = c; }}
            src={slelectVideoInfo.src}
            controls
            onTimeUpdate={(e) => this.handleVideoTimeChange(e)}
            crossOrigin="anonymous"
          />
          {
            showList.map((item) => (
              <Transformable
                key={item.id}
                onClick={() => {
                  this.handelClickChoosedSelected(item);
                }}
                onChange={(val) => this.handleChangeConfig(val, item)}
                disabled={dragId !== item.id}
                translate
                drag
                defaultPosition={{ w: item.w, h: item.h, x: item.x, y: item.y, rotate: 0 }}
              >
                <img
                  src={defaultImg[defaultImgIndex]}
                  style={{ width: '100%', height: '100%' }}
                  alt=""
                />
              </Transformable>
            ))
          }
        </VideoContent>
        <CoverContaier>
          <TopAction>
            <Button type="primary">新增马赛克</Button>
            <Button
              type={slelectImgUrlList.length > 0 ? 'primary' : ''}
              disabled={slelectImgUrlList.length > 0 || slelectRequrestingBool}
              onClick={this.handleClickFetch}
            >自动人脸识别</Button>
          </TopAction>
          {slelectRequrestingBool && <Spin />}
          {
            slelectImgUrlList.length > 0 && <CoverContent>
              {
                slelectImgUrlList.map((item, index) => (
                  <CoverPic
                    src={item}
                    key={item}
                    onClick={() => this.handleClickSelectImg(index)}
                    choosed={_.findIndex(choosedImgIndex, (o) => o === index) !== -1}
                  >
                    {
                      (_.findIndex(choosedImgIndex, (o) => o === index) !== -1) && <Icon type="check-circle" style={{ fontSize: 16, color: '#ff8140', position: 'absolute', right: '5px', bottom: '5px' }} />
                    }
                  </CoverPic>
                ))
              }
            </CoverContent>
          }
          <MosaicPicContent>
            <ImgContent onClick={() => this.setState({ defaultImgIndex: 0 })}>
              <img src={defaultImg[0]} alt="" />
              {defaultImgIndex === 0 && <Icon type="check-square" style={{ fontSize: 16, color: '#ff8140', position: 'absolute', right: '15px', bottom: '5px' }} />}
            </ImgContent>
            <ImgContent onClick={() => this.setState({ defaultImgIndex: 1 })}>
              <img src={defaultImg[1]} alt="" />
              {defaultImgIndex === 1 && <Icon type="check-square" style={{ fontSize: 16, color: '#ff8140', position: 'absolute', right: '15px', bottom: '5px' }} />}
            </ImgContent>
          </MosaicPicContent>
        </CoverContaier>
      </Container>
    );
  }
}

VideoMosaicPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  slelectVideoInfo: PropTypes.object,
  actionFetchVideoAnalyse: PropTypes.func,
  slelectRequrestingBool: PropTypes.bool,
  slelectOriList: PropTypes.object,
  slelectImgUrlList: PropTypes.array,
};

const mapStateToProps = createStructuredSelector({
  slelectVideoInfo: selector.makeSelectVideoInfo(),
  slelectRequrestingBool: selector.makeSelectRequrestingBool(),
  slelectOriList: selector.makeSelectOriList(),
  slelectImgUrlList: selector.makeSelectImgUrlList(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    actionFetchVideoAnalyse: (val) => dispatch(fetchVideoAnalyse(val)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'videoMosaicPage', reducer });
const withSaga = injectSaga({ key: 'videoMosaicPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(VideoMosaicPage);
