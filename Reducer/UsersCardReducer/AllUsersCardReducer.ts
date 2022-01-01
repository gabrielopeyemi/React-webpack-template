import { PURGE } from 'redux-persist';
import { ActionTypes } from '../types';

const INITIAL_STATE: any[] = [];
const AllUsersCardReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'ALL_USER_CARD':
      return action.payload;
    case PURGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default AllUsersCardReducer;
