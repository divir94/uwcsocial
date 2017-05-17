let nextEventId = 0;


export const addEvent = (title) => {
  return {
    type: 'ADD_EVENT',
    id: nextEventId++,
    title
  };
};

export const editEvent = (event) => {
  return {
    type: 'EDIT_EVENT',
    event
  };
};

export const deleteEvent = (id) => {
  return {
    type: 'DELETE_EVENT',
    id
  };
};
