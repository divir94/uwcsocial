let user = (state = [], action) => {
  switch (action.type) {
    case 'VIEW_USER':
      return state;
     case 'EDIT_USER':
      return action.user;
    default:
      return state;
  }
};

export default user;