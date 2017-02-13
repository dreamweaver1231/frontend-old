/*
 * AppReducer
 *
 */
import { fromJS } from 'immutable';

import {
  TOGGLE_SIDEBAR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  sidebar: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return state
        .set('sidebar', !state.get('sidebar'));
    default:
      return state;
  }
}

export default appReducer;
