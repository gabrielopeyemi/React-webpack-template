import { PURGE } from 'redux-persist';
import { ActionTypes } from '../types';

const INITIAL_STATE = '';
const tokenReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'TOKEN':
      return action.payload;
    case PURGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default tokenReducer;
