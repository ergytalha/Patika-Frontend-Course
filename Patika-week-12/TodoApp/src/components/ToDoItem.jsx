import React from "react";
function ToDoItem({ todo, toggleTodo, deleteTodo }) {
  return (
    <>
      <li className={todo.completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <label>{todo.text}</label>
          <button
            className="destroy"
            onClick={() => deleteTodo(todo.id)}
          ></button>
        </div>
      </li>
    </>
  );
}

export default ToDoItem;
