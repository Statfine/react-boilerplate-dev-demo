import React, { PureComponent } from 'react';

import ItemChunk from './ItemChunk';

import { Container, TimeContainer, TimelineContainer } from './styled';

const BaseWidth = 20;

export default class TimeLine extends PureComponent {
  state = {
    videoList: [
      { length: 20, startTime: 0, endTime: 20, cover: 'http://123.206.18.31/static/video/v1.png' },
      { length: 10, startTime: 0, endTime: 10, cover: 'http://123.206.18.31/static/video/v2.png' },
      { length: 46, startTime: 0, endTime: 5, cover: 'http://123.206.18.31/static/video/v1.png' },
    ],
    choosedIndex: -1,
    noTrans: false,
  };
  handleChangeTime = (index, info) => {
    const videoList = this.state.videoList.concat();
    videoList[index] = info;
    console.log('handleChangeTime===>', info);
    this.setState({ videoList });
  }
  render() {
    const { videoList, choosedIndex, noTrans } = this.state;
    return (
      <Container>
        <TimeContainer>
          { /* 单行 */}
          <TimelineContainer>
            {
              videoList.map((item, index) => (
                <ItemChunk
                  key={index}
                  index={index}
                  choosedIndex={choosedIndex}
                  baseWidth={BaseWidth}
                  videoList={videoList}
                  handleChoosed={(index) => {
                    this.setState({ choosedIndex: index });
                    console.log('choose', index);
                  }}
                  handleChangeTime={this.handleChangeTime}
                  noTrans={noTrans}
                  hanldeTrans={(noTrans) => this.setState({ noTrans })}
                />
              ))
            }
          </TimelineContainer>
          { /* 单行 */}
        </TimeContainer>
      </Container>
    );
  }
}
