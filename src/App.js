import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allReducers from './reducers';
import SceneContainer from './containers/SceneContainer';

let initialState = {
  events: [
    {id: 1, title: 'Clean up garage', createdAt: new Date(), completed: false},
    {id: 2, title: 'Install BBQ', createdAt: new Date(), completed: false},
    {id: 3, title: 'Watch NBA final', createdAt: new Date(), completed: false},
    {id: 4, title: 'Buy supprise egg', createdAt: new Date(), completed: false},
    {id: 5, title: 'Watch Iron Man 2', createdAt: new Date(), completed: false},
  ],
  theme: 'slateGray'
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
