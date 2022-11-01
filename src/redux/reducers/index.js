import alert from './alert';
import { combineReducers } from 'redux';
import auth from './auth';
import profile from './profile';
const rootReducer = combineReducers({
  alert,
  auth,
  profile
});

export default rootReducer;
