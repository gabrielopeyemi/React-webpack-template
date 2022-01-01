import { PURGE } from 'redux-persist';
import { ActionTypes } from '../types';

const INITIAL_STATE: any[] = [];
const bankListReducer = (state = INITIAL_STATE, action: ActionTypes) => {
  switch (action.type) {
    case 'BANK_LIST':
      return action.payload;
    case PURGE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default bankListReducer;
