/* eslint-disable */
import React from 'react';

import Mp4FuQin from './resource/fuqinsanwenshi.mp3';

import { Lrc } from './mock';

export default class LrcPage extends React.PureComponent {
  state = {
    currentTime: 0,
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

  handleAudioTimeUpdate = () => {
    const currentTime = this.audio.currentTime;
    console.log('handleAudioTimeUpdate', currentTime);
    this.setState({ currentTime });
  }

  render() {
    const { currentTime } = this.state;
    return (
      <div>
        <h2>LrcPage - currentTime:{currentTime}</h2>
        <audio
          ref={(ref) => this.audio = ref}
          src={Mp4FuQin}
          controls
          preload="true"
          onTimeUpdate={this.handleAudioTimeUpdate}
        />
      </div>
    );
  }
}
