import React, { PureComponent } from 'react';

import { Container, SlideBox, Slide, Masking } from './styled';

/*
  * http://www.freejs.net/demo/305/index.html#
  * https://juejin.im/post/5a7bae6f5188257a84622348
 */

const StyleSilder = {
  middle: {
    // 此为中间展示的那张
    left: '10%',
    bottom: '0%',
    width: '80%',
    zIndex: '33',
  },
  start: {
    // 第一张则为左侧那张
    left: '0%',
    bottom: '0%',
    width: '75%',
    zIndex: '22',
  },
  end: {
    // 最后一张及右侧那张
    right: '0%',
    bottom: '0%',
    width: '75%',
    zIndex: '22',
  },
  normal: {
    // 此为隐藏图片的样式
    left: '13%',
    bottom: '0%',
    width: '74%',
    zIndex: '11',
  },
};

const SrcList = [
  'http://video.static.api.vcg.com/videos/snapshot/VCG124818174_00001.jpg',
  'https://image.clip.cn/snapshot/6cb92fbe-783c-47ab-8409-ef4c127b4cc3-1000.jpg',
  'https://image.clip.cn/snapshot/1b57d93f-0236-43be-96f2-ba0c002b5c72-1000.jpg',
  'http://video.static.api.vcg.com/videos/snapshot/VCG124832103_00001.jpg',
  'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/snapshot/c801bcc6-11f0-4458-aa07-caa283394789-9617.png',
  'http://video.static.api.vcg.com/videos/snapshot/VCG124832100_00001.jpg',
  'https://cloud-clip-img.oss-cn-hangzhou.aliyuncs.com/snapshot/d0237f87-4e99-43e8-a83a-449ad392149f-3827.png',
  'https://image.clip.cn/snapshot/355fb02c-035f-43ad-9e34-fe748016bebe-1000.jpg',
];

export default class CarousePage extends PureComponent {
  state = {
    dir: [
      { name: 'middle' },
      { name: 'start' },
      { name: 'normal' },
      { name: 'normal' },
      { name: 'normal' },
      { name: 'normal' },
      { name: 'normal' },
      { name: 'end' },
    ],
  };

  slide = (name, key) => {  // 图片点击逻辑
    // 记录当前节点
    this.setState({ current: key });
    // 数组操作方法
    this.imgArr(name);
  }

  imgArr = (name) => { // 数组处理
    const dirCopy = this.state.dir;
    if (name === 'start') {  // 点击左侧那张
      const pop = dirCopy.pop(); // 从数组尾部弹出一个元素
      dirCopy.unshift(pop); // 尾部元素添加到数组头部
    } else if (name === 'end') { // 点击右侧那张
      const shift = dirCopy.shift(); // 从数组头部弹出一个元素
      dirCopy.push(shift);  // 添加到数组尾部
    }
    this.setState({ dir: dirCopy }); // 保存重新排列的数组 并触发render
  }

  render() {
    const { dir } = this.state;
    return (
      <Container>
        <SlideBox>
          {dir.map((item, key) => (
            <Slide key={key} style={StyleSilder[item.name]}>
              <img src={SrcList[key]} alt="" />
              <Masking onClick={() => this.slide(item.name, key)}>{''}</Masking>
            </Slide>
          ))}
        </SlideBox>
      </Container>
    );
  }
}
