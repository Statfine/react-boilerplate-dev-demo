/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

import Mp4FuQin from './resource/fuqinsanwenshi.mp3';

import { Lrc } from './mock';

const Line = styled.div`
  color: ${({ inTime }) => inTime ? '#4885ed' : '#333'};
  transition-duration: 1s;
`;

export default class LrcPage extends React.PureComponent {
  state = {
    currentTime: 0,
    durationTime: 0,
    oLRC: {
      ti: '', // 歌曲名
      ar: '', // 演唱者
      al: '', // 专辑名
      by: '', // 歌词制作人
      offset: 0, // 时间补偿值，单位毫秒，用于调整歌词整体位置
      ms: [], // 歌词数组{t:时间,c:歌词}
    },
  };

  componentWillMount() {
    this.handleCreateLrc();
  }

  handleCreateLrc = () => {
    const oLRC = {
      ti: '', // 歌曲名
      ar: '', // 演唱者
      al: '', // 专辑名
      by: '', // 歌词制作人
      offset: 0, // 时间补偿值，单位毫秒，用于调整歌词整体位置
      ms: [], // 歌词数组{t:时间,c:歌词}
    };
    Lrc.map((item) => {
      const t = item.substring(item.indexOf('[') + 1, item.indexOf(']')); // 取[]间的内容
      const s = t.split(':'); // 分离:前后文字
      if (isNaN(parseInt(s[0]))) { // 不是数值
        for (const i in oLRC) {
          if (i !== 'ms' && i === s[0].toLowerCase()) {
            oLRC[i] = s[1];
          }
        }
      } else {
        const arr = item.match(/\[(\d+:.+?)\]/g); // 提取时间字段，可能有多个
        let start = 0;
        for (const k in arr) {
          start += arr[k].length; // 计算歌词位置
        }
        const content = item.substring(start); // 获取歌词内容
        for (const k in arr) {
          const t = arr[k].substring(1, arr[k].length - 1); // 取[]间的内容
          const s = t.split(':'); // 分离:前后文字
          oLRC.ms.push({ // 对象{t:时间,c:歌词}加入ms数组
            t: (parseFloat(s[0]) * 60 + parseFloat(s[1])).toFixed(3),
            c: content,
          });
        }
      }
      return null;
    });
    this.setState({ oLRC });
    console.log('handleCreateLrc', oLRC);
  }
  // handleCreateLrc = () => {
  //   const list = Lrc.map((item) => {
  //     const t = item.substring(item.indexOf('[') + 1, item.indexOf(']'));
  //     return {
  //       t: (t.split(':')[0] * 60 + parseFloat(t.split(':')[1])).toFixed(3),
  //       c: item.substring(item.indexOf(']') + 1, item.length),
  //     };
  //   });
  //   console.log('handleCreateLrc', list);
  // }

  handleAudioCanPaly = () => {
    const durationTime = this.audio.duration;
    console.log('handleAudioCanPaly', durationTime);
    this.setState({ durationTime });
  }

  handleAudioTimeUpdate = () => {
    const currentTime = this.audio.currentTime;
    console.log('handleAudioTimeUpdate', currentTime);
    this.setState({ currentTime });
  }

  handleIsInTime = (lineTime, index) => {
    const { currentTime, durationTime, oLRC } = this.state;
    const nextTime = index < oLRC.ms.length - 1 ? Number(oLRC.ms[index + 1].t) : durationTime;
    const beginTime = Number(oLRC.ms[index].t);
    return currentTime >= beginTime && currentTime <= nextTime;
  }

  render() {
    const { currentTime, oLRC } = this.state;
    return (
      <div>
        <h2>LrcPage - currentTime:{currentTime}</h2>
        <audio
          ref={(ref) => this.audio = ref}
          src={Mp4FuQin}
          controls
          preload="true"
          onTimeUpdate={this.handleAudioTimeUpdate}
          onCanPlay={this.handleAudioCanPaly}
        />
        { oLRC.ti && <p>歌曲名:{oLRC.ti}</p> }
        { oLRC.ar && <p>演唱者:{oLRC.ar}</p> }
        { oLRC.al && <p>专辑名:{oLRC.al}</p> }
        { oLRC.by && <p>歌词制作人:{oLRC.by}</p> }
        {
          oLRC.ms.map((item, index) => (
            <Line key={item.t} inTime={this.handleIsInTime(item.t, index)}>
              <span>{item.t}:</span>
              <span>{item.c}</span>
            </Line>
          ))
        }
      </div>
    );
  }
}
