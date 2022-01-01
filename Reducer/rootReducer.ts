import { combineReducers } from 'redux';
import bankListReducer from './bankListReducer/bankListReducer';
import tokenReducer from './tokenReducer/tokenReducer';
import TransactionReducer from './TransactionReducer/TransactionReducer';
import typesReducer from './typesReducer/typesReducer';
import UserDataReducer from './userDataReducer/userDataReducer';
import userDetailsReducer from './userDetailsReducer/userDetailsReducer';
import AllUsersCardReducer from './UsersCardReducer/AllUsersCardReducer';
import VendorStatsReducer from './VendorStatsReducer/VendorStatsReducer';

const RootReducer = combineReducers({
  userDetailsReducer,
  typesReducer,
  UserDataReducer,
  AllUsersCardReducer,
  tokenReducer,
  VendorStatsReducer,
  TransactionReducer,
  bankListReducer,
});

export default RootReducer;
