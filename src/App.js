import React, { Component } from 'react';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import devToolsEnhancer from 'remote-redux-devtools';

import allReducers from './reducers';
import SceneContainer from './containers/SceneContainer';


let initialState = {
  events: [{
    'id': -1,
    'name': 'MOMA Day',
    'date': '04/12/2017',
    'time': '4pm',
    'location': '11 W 53rd St, New York, NY 10019',
    'going': ['Divir Gupta', 'Lena Lola'],
    'image': require('./img/fjords.jpg'),
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.'
  },
  {
    'id': -2,
    'name': 'NYU Reunion',
    'date': '04/12/2017',
    'time': '4pm',
    'location': '11 W 53rd St, New York, NY 10019',
    'going': ['Nick McQuinn'],
    'image': require('./img/fjords.jpg'),
    'description': 'labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.'
  }]
}

let store = createStore(
  allReducers,
  initialState,
  devToolsEnhancer()
);

let UWCApp = () => {
  return (
    <Provider store={store}>
      <SceneContainer />
    </Provider>
  );
}

console.ignoredYellowBox = ['Remote debugger'];

export default UWCApp;
