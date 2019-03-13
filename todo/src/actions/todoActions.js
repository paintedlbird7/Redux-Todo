// Action Type -> action creator -> action
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export const addTodo = todoName => {  // action creator

  console.log(todoName);
  return {
    type: ADD_TODO,
    payload: todoName
  };
};

// dispatch({ type: 'ADD_TODO', payload: 'todoName' });
export const toggleTodo = id => {
  console.log(id);
  return {
    type: TOGGLE_TODO,
    payload: id
  };
};


