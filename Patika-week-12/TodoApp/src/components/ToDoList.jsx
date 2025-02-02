import ToDoItem from "./ToDoItem"

function ToDoList( { todos, toggleTodo, deleteTodo } ) {
  return (
    <>
     <section className="main">
        <ul className="todo-list">
            {
                todos.map(todo => (
                    <ToDoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} /> 
                ))
            }
        </ul>
      </section>
    </>
  )
}

export default ToDoList