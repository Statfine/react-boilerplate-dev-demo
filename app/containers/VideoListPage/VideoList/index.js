// import Timeago from 'timeago.js';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import RcPaginationCom from 'components/RcPaginationCom';
import DeleteDialog from 'components/DeleteDialog';
import Item from './Item';

const Page = styled.div`
  border-top:1px solid #e5e5e5;
  border-radius:2px;
`;

const Div = styled.div`
  padding: 12px 0;
`;

class VideoList extends PureComponent {
  state = {
    open: false,
    deleteVideoInfo: '',
  };

  handleDelete() {
    this.setState({ open: false });
    this.props.deleteVideo(this.state.deleteVideoInfo.id);
  }

  createDelete(video) {
    this.setState({ open: true, deleteVideoInfo: video });
  }

  refesh(id) {
    this.props.retryVideos({ id });
  }
  //  + videos.length + i
  renderVideos = (videos) =>
    videos.toJS().map((video) =>
      <Item
        video={video}
        key={video.id}
        refesh={(id) => this.refesh(id)}
        createDelete={(video) => this.createDelete(video)}
        onFetchVideoState={this.props.onFetchVideoState}
      />);

  render() {
    const { videoList, pagination, onPaginationChange } = this.props;
    const { deleteVideoInfo } = this.state;

    return (
      <div>
        <Div>
          {this.renderVideos(videoList)}
        </Div>
        <Page>
          <RcPaginationCom
            pagination={pagination.toJS()}
            pageSize={10}
            onPaginationChange={(current) => onPaginationChange(current)}
          />
        </Page>
        <DeleteDialog
          open={this.state.open}
          title={`确认删除 ${deleteVideoInfo.title} 视频`}
          onDelete={() => this.handleDelete()}
          closeDialog={() => this.setState({ open: false })}
        />
      </div>
    );
  }
}

VideoList.propTypes = {
  videoList: PropTypes.object,
  pagination: PropTypes.object,
  onPaginationChange: PropTypes.func,
  deleteVideo: PropTypes.func,
  retryVideos: PropTypes.func,
  onFetchVideoState: PropTypes.func,
};

export default VideoList;
