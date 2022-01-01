import { PURGE } from 'redux-persist';
import { ActionTypes } from '../types';

const INITIAL_STATE = '';
const typesReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'ACCOUNT_TYPE':
      return action.payload;
    case PURGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default typesReducer;
