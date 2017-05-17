import { combineReducers } from 'redux';
import events from './events';
import theme from './theme';

const allReducers = combineReducers({
  events,
  theme
});

export default allReducers;
