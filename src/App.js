import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import allReducers from './reducers';
import SceneContainer from './containers/SceneContainer';


let initialState = {
  events: [
    { id: 1, title: 'Clean up garage' },
    { id: 2, title: 'Install BBQ' },
    { id: 3, title: 'Watch NBA final' },
    { id: 4, title: 'Buy supprise egg' },
    { id: 5, title: 'Watch Iron Man 2' },
  ]
}

let store = createStore(
  allReducers, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let UWCApp = () => {
  return (
    <Provider store={store}>
      <SceneContainer />
    </Provider>
  );
}

export default UWCApp;
