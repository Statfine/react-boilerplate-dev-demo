import { fromJS } from 'immutable';
import {
    LOHIN_REQUEST,
    LOHIN_REQUEST_SUC,
    LOHIN_REQUEST_ERROR,
  } from './constants';

const initialState = fromJS({
  requesting: false,
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOHIN_REQUEST:
      return state.set('requesting', true);
    case LOHIN_REQUEST_SUC:
      return state.set('requesting', false);
    case LOHIN_REQUEST_ERROR:
      return state.set('requesting', false);
    default:
      return state;
  }
}

export default authReducer;
