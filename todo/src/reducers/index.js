import { UPDATE_TITLE, ADD_TODO, TOGGLE_TODO } from '../actions';

const initialState = {
  title: 'Todo List',
  todos: [
    { name: 'Walk the dog.', id: 34782356, dragonStatus: false },
    { name: 'Feed the cat', id: 677802, dragonStatus: true }
    // { name: 'Hector', bestFriend: false }

  ]
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };

    case ADD_TODO:
      const newTodo = {
        name: action.payload,
        id: Date.now(),
        dragonStatus: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case TOGGLE_TODO:
      // map through state.members
      // if member's id at current iteration matches action.payload
      // return new member object - spread in old member object
      // toggle member's dragonStatus (immutable)
      // else return member untouched
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              dragonStatus: !todo.dragonStatus
            };
          }
          return todo;
        })
      };

    default:
      return state;
  }
}

export default reducer;
