//create initial state
const initialState = {
    todo: [],
};

//create a reducer function
const reducer = (state = initialState, action) => {
    switch (action.type) {
      //create an add to do case
      case "ADD_TODO":
        return {
          //return current state
          ...state,
          //append the current todo's with new todo
          //new todo comes from action payload
          todo: [...state.todo, action.payload],
        };
      case "DELETE_TODO":
        return {
          //return current state
          ...state,
          //filter the todo's
          todo: state.todos.filter(todo => todo.id !== action.payload),
        };
      default:
        return state;
    }
}

export default reducer;