/*
 *
 * VideoListPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import styled from 'styled-components';
import CircularGress from 'components/CircularGress';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { deleteVideoActions } from './api';
import FilterBar from './FilterBar';
import VideoList from './VideoList';
import { selectList, selectFilterParams, selectPagination } from './selectors';
import reducer from './reducer';
import saga from './sagas';

// import AuthLoginPagereducer from '../AuthLoginPage/reducer';
// import AuthLoginPagesaga from '../AuthLoginPage/sagas';

import {
  changePagination,
  changeFilterParams,
  retryVideosActions,
  fetchVideoState,
  cancelFetchVideoState,
  fetchVideo,
} from './actions';
const Container = styled.div`
  height: 100%;
  min-width: 1050px;
  padding: 20px 25px;
  padding-top: 0;
`;

const FilterBarContainer = styled.div`
  background: #fff;
  height: 56px;
  padding: 0 30px;
  border-bottom: 2px #f2f3f4 solid;
  border-radius: 2px;
`;

const VideoListContainer = styled.div`
  background: #fff;
  border-radius: 2px;
`;

const NoData = styled.div`
  height: 64px;
  line-height: 64px;
  color: #999;
  font-size: 18px;
  text-align: center;
  background-color: #fff;
  border-radius: 2px;
`;

export class VideoListPage extends React.Component {
  state = {
    currentId: 'upload',
    hasRender: false,
  };

  componentDidMount() {
    this.props.fetchUserVideos();
    this.setState({ hasRender: true }); // eslint-disable-line react/no-did-mount-set-state
  }

  componentWillUnmount() {
    this.props.onCancelFetchVideoState();
  }

  render() {
    const {
      videoList,
      videoListRequesting,
      pagination,
      filterParams,
      fetchUserVideos,
      onFetchVideoState,
    } = this.props;
    return (
      <Container>
        <Helmet title="视频列表" />
        <FilterBarContainer>
          <FilterBar
            filterParams={filterParams}
            onFilterParamsChange={this.props.changeFilterParams}
            fetchUserVideos={fetchUserVideos}
          />
        </FilterBarContainer>
        <VideoListContainer>
          {videoListRequesting ? (
            <CircularGress />
          ) : (
            <div>
              {videoList.size > 0 ? (
                <VideoList
                  videoList={videoList}
                  pagination={pagination}
                  onPaginationChange={this.props.changePagination}
                  deleteVideo={this.props.deleteVideoRequest}
                  retryVideos={this.props.retryVideos}
                  onFetchVideoState={onFetchVideoState}
                />
              ) : (
                <NoData>暂无</NoData>
              )}
            </div>
          )}
        </VideoListContainer>
      </Container>
    );
  }
}

VideoListPage.propTypes = {
  fetchUserVideos: PropTypes.func.isRequired,
  changePagination: PropTypes.func,
  changeFilterParams: PropTypes.func,
  deleteVideoRequest: PropTypes.func,
  videoList: PropTypes.object,
  videoListRequesting: PropTypes.bool,
  pagination: PropTypes.object,
  filterParams: PropTypes.object,
  retryVideos: PropTypes.func,
  onFetchVideoState: PropTypes.func,
  onCancelFetchVideoState: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  videoList: selectList(),
  filterParams: selectFilterParams(),
  pagination: selectPagination(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUserVideos: () => dispatch(fetchVideo()),
    changePagination: (...arg) => dispatch(changePagination(...arg)),
    changeFilterParams: (...arg) => dispatch(changeFilterParams(...arg)),
    deleteVideoRequest: (...arg) =>
      dispatch(deleteVideoActions.request(...arg)),
    retryVideos: (...arg) => dispatch(retryVideosActions(...arg)),
    onFetchVideoState: (arg) => dispatch(fetchVideoState(arg)),
    onCancelFetchVideoState: (...arg) => dispatch(cancelFetchVideoState(...arg)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'VideoListPage', reducer });
const withSaga = injectSaga({ key: 'VideoListPage', saga });
// const withAuthReducer = injectReducer({ key: 'auth', AuthLoginPagereducer });
// const withAuthSaga = injectSaga({ key: 'auth', AuthLoginPagesaga });

export default compose(
  withReducer,
  withSaga,
  // withAuthReducer,
  // withAuthSaga,
  withConnect,
)(VideoListPage);
