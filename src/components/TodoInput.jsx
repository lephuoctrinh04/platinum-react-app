import { useState } from "react";

function TodoInput({ addTask }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    addTask(text.trim());
    setText("");
  }

  return (
    <form className="todo-input-group" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TodoInput;