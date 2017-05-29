let event = (state, action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      return {
        id: action.id,
        ...action.event
      }
    case 'EDIT_EVENT':
      if (state.id !== action.event.id) {
        return state;
      }

      return Object.assign({}, state, {title: action.event.title});
  }
};


let events = (state = [], action) => {
  switch (action.type) {
    case 'ADD_EVENT':
      let newEvent = [
        ...state,
        event(undefined, action)
      ];
      return newEvent;
    case 'EDIT_EVENT':
      return state.map(t =>
        event(t, action)
      );
    case 'DELETE_EVENT':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default events;
