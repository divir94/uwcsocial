import { combineReducers } from 'redux';

import events from './events';


const allReducers = combineReducers({
  events
});

export default allReducers;
