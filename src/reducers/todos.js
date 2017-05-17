const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        title: action.title,
        createdAt: new Date(),
        completedAt: null,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return Object.assign({}, state, {
        completed: !state.completed,
        completedAt: !state.completed ? new Date() : null
      });
    case 'EDIT_TODO':
      if (state.id !== action.todo.id) {
        return state;
      }

      return Object.assign({}, state, {title: action.todo.title});
  }
};


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    case 'EDIT_TODO':
      return state.map(t =>
        todo(t, action)
      );
    case 'DELETE_TODO':
      return state.filter(t => t.id !== action.id);
    default:
      return state;
  }
};

export default todos;
