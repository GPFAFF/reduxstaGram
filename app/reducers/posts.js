// reducer takes in an action and a copy of current state

const posts = (state = [], action) => {

  switch(action.type) {
    case 'INCREMENT_LIKES' :
    console.log('incrementing likes')
    const index = action.index;
    return [
      ...state.slice(0, index),
      {...state[index], likes: state[index].likes + 21},
      ...state.slice(index + 1)
    ]
    default:
      return state;
  }
}

export default posts;
