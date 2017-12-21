import { createSelector } from 'reselect';

/**
 * Direct selector to the videoListPage state domain
 */
const selectVideoListPageDomain = () => (state) => state.get('VideoListPage');

const selectFilterParams = () => createSelector(
  selectVideoListPageDomain(),
  (substate) => substate.get('filterParams').toJS()
);

const selectPagination = () => createSelector(
  selectVideoListPageDomain(),
  (substate) => substate.get('pagination')
);

const selectList = () => createSelector(
  selectVideoListPageDomain(),
  (substate) => substate.get('videoList')
);

export {
  selectVideoListPageDomain,
  selectFilterParams,
  selectPagination,
  selectList,
};
