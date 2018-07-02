
import { fromJS } from 'immutable';
import videoMosaicPageReducer from '../reducer';

describe('videoMosaicPageReducer', () => {
  it('returns the initial state', () => {
    expect(videoMosaicPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
