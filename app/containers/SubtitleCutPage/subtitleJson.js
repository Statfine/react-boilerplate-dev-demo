import React from 'react';

import data from './subtitle.json';
import { SubtitleDiv, EachDiv } from './styled';

export default class SubtitleJson extends React.PureComponent {
  state = {
    subtitle: data.subtitles,
    lineSubtitle: [],
  }
  handleSplitText = (item) => {
    const { text, st, et } = item;
    const startTime = Number(st);
    const endTime = Number(et);
    const lineText = text.trim();
    const lineTextArray = lineText.split('');
    const lineTextLength = lineText.length;
    const lineTime = endTime - startTime;
    const tiemSpace = Number((lineTime / (lineTextLength - 1)).toFixed(2));
    const lineSubtitle = lineTextArray.map((item, index) => {
      let time = Number((startTime + (tiemSpace * index)).toFixed(3));
      if (index === (lineTextArray.length - 1) && time > endTime) {
        time = endTime; // 均分不够超出处理
      }
      return ({ text: item, time });
    });
    return lineSubtitle;
  }
  render() {
    const { subtitle } = this.state;
    return (
      <div style={{ width: 1160, margin: '0 auto' }}>
        {
          subtitle.map((item) => (
            <SubtitleDiv>
              <EachDiv flex={1}>
                <p>文本:{item.text}</p>
                <p>开始:{item.st}</p>
                <p>结束:{item.et}</p>
              </EachDiv>
              <EachDiv flex={1}>
                {
                  this.handleSplitText(item).map((sub) => (
                    <p>{`${sub.time}: ${sub.text}`}</p>
                  ))
                }
              </EachDiv>
            </SubtitleDiv>
          ))
        }
      </div>
    );
  }
}
