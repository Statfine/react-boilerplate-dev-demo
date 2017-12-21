import { createSelector } from 'reselect';

const selectAuth = () => (state) => state.get('auth');

const selectRequesting = () => createSelector(
  selectAuth(),
  (authState) => authState.get('requesting')
);

export {
  selectRequesting,
};
