import { useState } from "react";
import { useDispatch } from "react-redux";
import "./TodoInput.css";

const TodoInput = () => {
  //useDispatch
  const dispatch = useDispatch();

  //set state
  const [newTodo, setNewTodo] = useState();

  //function
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const dispatchTodo = () =>
    dispatch({
      type: "ADD_TODO",
      payload: {
        label: newTodo,
        id: Math.floor(Math.random() * 100),
      },
    });
  return (
    <div className="container">
      <input
        onChange={handleChange}
        value={newTodo}
        type="text"
        className="input"
      />
      <button onClick={dispatchTodo} className="addBtn">
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
