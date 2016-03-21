import { combineReducers } from 'redux';
import { message } from '../reducers/message';

const rootReducer = combineReducers({
  message,
});

export default rootReducer;
