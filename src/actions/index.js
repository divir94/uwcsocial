let nextEventId = 0;


export const addEvent = (event) => {
  return {
    type: 'ADD_EVENT',
    id: nextEventId++,
    event
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
