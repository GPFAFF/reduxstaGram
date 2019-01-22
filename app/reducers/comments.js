// reducer takes in an action and a copy of current state

const comments = (state = [], action) => {
  if (typeof action.postId !== 'undefined') {
    return {
      // take current state
      ...state,
      // overwrite with new state
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  console.log(state, action);
  return state;
}

const postComments = (state = [], action) => {
  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
    default:
      return state;
  }
}
export default comments;
