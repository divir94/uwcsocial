let event = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        title: action.title
      };
    case 'EDIT_TODO':
      if (state.id !== action.event.id) {
        return state;
      }

      return Object.assign({}, state, {title: action.event.title});
  }
};


let events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        event(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        event(t, action)
      );
    case 'EDIT_TODO':
      return state.map(t =>
        event(t, action)
      );
    case 'DELETE_TODO':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default events;
