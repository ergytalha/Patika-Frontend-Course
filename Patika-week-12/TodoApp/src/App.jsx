import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Taste JavaScript", completed: true },
    { id: 2, text: "Code furiously", completed: false },
    { id: 3, text: "Promote Mavo", completed: false },
    { id: 4, text: "Give talks", completed: true },
    { id: 5, text: "Write tutorials", completed: false },
  ]);

  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    setTodos([...todos, { id: todos.length + 1, text, completed: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filterTodos = todos.filter(
    (todo) =>
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed)
  );

  return (
    <section className="todoapp">
      <Header addTodo={addTodo} />
      <ToDoList
        todos={filterTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <Footer
        count={todos.filter((todo) => !todo.completed).length}
        filter={filter}
        setFilter={setFilter}
        clearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;
