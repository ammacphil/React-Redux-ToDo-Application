import { useState } from "react";
import TodoInput from "./TodoInput";
import '../App.css'




const Todos = () => {
    const todos = useSelector(state => state.todos)
    if(!todos || !todo.length){
        return <h3>No Todos</h3>
    }

  return(
      <div className="container">
          <ul>
              {todos.map(todo => <li>{todo.label}</li>)}
          </ul>
      </div>
  )
};

export default Todos;
