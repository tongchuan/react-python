import { combineReducers } from 'redux';
import { newsReducers } from './newsReducers';
import { userReducers } from './userReducers'
const reducers: any = combineReducers({
  newsState: newsReducers,
  userState: userReducers
});

export default reducers;