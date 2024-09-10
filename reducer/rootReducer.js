// rootReducer.js
import { combineReducers } from 'redux';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  // your reducers go here
  users: usersReducer,

});

export default rootReducer;