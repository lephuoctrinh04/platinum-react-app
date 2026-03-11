import TodoItem from "./TodoItem";

function TodoList({ tasks, toggleTask, deleteTask, editTask }) {
  if (tasks.length === 0) {
    return <p className="empty-text">No tasks found.</p>;
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  );
}

export default TodoList;