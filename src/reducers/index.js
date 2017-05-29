import { combineReducers } from 'redux';

import events from './events';
import user from './user';


const allReducers = combineReducers({
  events,
  user
});

export default allReducers;
