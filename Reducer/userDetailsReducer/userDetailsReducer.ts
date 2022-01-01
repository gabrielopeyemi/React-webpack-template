import { PURGE } from 'redux-persist';
import { ActionTypes } from '../types';

const INITIAL_STATE = {};

const userDetailsReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'USER_DETAILS':
      return action.payload;
    case PURGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default userDetailsReducer;
