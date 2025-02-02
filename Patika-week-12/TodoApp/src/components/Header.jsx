import { useState } from "react";
function Header() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue("");
    }
  };
  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            autoFocus
          />
        </form>
      </header>
    </div>
  );
}

export default Header;
