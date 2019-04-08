import React, { PureComponent } from 'react';
import { Input } from 'antd';
import { Wrap, ListCotainer } from './styled';

import VideoItem from './videoItem';

const Search = Input.Search;
class VideoList extends PureComponent {
  state ={}

  render() {
    return (
      <Wrap>
        <div id="material-select-animation-target">car</div>
        <Search
          placeholder="input search text"
          onSearch={(value) => console.log(value)}
          style={{ width: 200 }}
          className="inputSearch"
        />
        <ListCotainer>
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </ListCotainer>
      </Wrap>
    );
  }
}

export default VideoList;
