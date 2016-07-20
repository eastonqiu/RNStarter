import { combineReducers } from 'redux';
import hello from './modules/hello';
import auth from './modules/auth';

export default combineReducers({
  hello,
  auth,
});
