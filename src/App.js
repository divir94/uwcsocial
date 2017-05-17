import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import SceneContainer from './containers/SceneContainer';

const defaultTodos = [
  {id: 1, title: 'Clean up garage', createdAt: new Date(), completed: false},
  {id: 2, title: 'Install BBQ', createdAt: new Date(), completed: false},
  {id: 3, title: 'Watch NBA final', createdAt: new Date(), completed: false},
  {id: 4, title: 'Buy supprise egg', createdAt: new Date(), completed: false},
  {id: 5, title: 'Watch Iron Man 2', createdAt: new Date(), completed: false},
];

const initialState = {
  todos: defaultTodos,
  visibilityFilter: 'SHOW_ACTIVE',
  theme: 'slateGray'
}

const store = createStore(
  todoApp, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

class UWCApp extends Component {

  render() {

    return (
      <Provider store={store}>
        <SceneContainer />
      </Provider>
    );
  }
}

export default UWCApp;
