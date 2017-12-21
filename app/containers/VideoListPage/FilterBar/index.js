import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SearchBar from 'components/SearchBar';
import SheetDrop from 'components/SheetDrop';
import IcRefresh from 'material-ui/svg-icons/navigation/refresh';
import { SOURCE_TYPE, MEDIA_SATUS, TIME_ORDER, VIDEO_LIST_SHARE_STATU } from 'common/types';
const Container = styled.div`
  display: flex;
  height:100%;
  align-items: center;
  flex-direction: row-reverse;
`;

const FreshDiv = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

function mapFilter(o) {
  return Object.keys(o).map((k) => ({ value: k, text: o[k] }));
}

const FILTER_TYPES = mapFilter(SOURCE_TYPE);
const FILTER_STATUS = mapFilter(MEDIA_SATUS);
const FILTER_TIMES = mapFilter(TIME_ORDER);
const FILTER_SHARE = mapFilter(VIDEO_LIST_SHARE_STATU);

class FilterBar extends Component {
  state ={
    title: this.props.filterParams.title,
  }

  render() {
    const { filterParams, onFilterParamsChange, fetchUserVideos } = this.props;
    return (
      <Container>
        {/* <SearchBar
          value={this.state.title}
          onChange={(e) => { this.setState({ title: e.target.value }); }}
          onSearch={() => { onFilterParamsChange({ title: this.state.title }); }}
        /> */}
        <SearchBar
          value={filterParams.title}
          onChange={(e) => { onFilterParamsChange({ title: e.target.value }); }}
          onSearch={() => { onFilterParamsChange({ title: this.state.title }); }}
        />
        <FreshDiv title="刷新" onClick={() => fetchUserVideos()}>
          <IcRefresh color="#444444" />
        </FreshDiv>
        <SheetDrop
          menuItem={FILTER_TYPES}
          value={filterParams.sourceType}
          onChange={(v) => { onFilterParamsChange({ sourceType: v }); }}
        />
        <SheetDrop
          menuItem={FILTER_STATUS}
          value={filterParams.mediaState}
          handlechange={this.handleSetState}
          onChange={(v) => { onFilterParamsChange({ mediaState: v }); }}
        />
        <SheetDrop
          menuItem={FILTER_TIMES}
          value={filterParams.timeOrder}
          onChange={(v) => { onFilterParamsChange({ timeOrder: v }); }}
        />
        <SheetDrop
          menuItem={FILTER_SHARE}
          value={filterParams.shareProcess}
          onChange={(v) => { onFilterParamsChange({ shareProcess: v }); }}
        />
      </Container>
    );
  }
}

FilterBar.propTypes = {
  onFilterParamsChange: PropTypes.func,
  filterParams: PropTypes.object.isRequired,
  fetchUserVideos: PropTypes.func,
};

export default FilterBar;
