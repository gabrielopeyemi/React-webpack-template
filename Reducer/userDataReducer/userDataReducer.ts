import { PURGE } from 'redux-persist';
import { ActionTypes } from '../types';

const INITIAL_STATE = { vendors: [], users: [], all: [] };
const UserDataReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'USERS':
      return action.payload;
    case PURGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default UserDataReducer;
