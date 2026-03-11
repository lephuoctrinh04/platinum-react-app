import { useState } from "react";

function TodoItem({ task, toggleTask, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  function handleSave() {
    if (!editedText.trim()) return;
    editTask(task.id, editedText.trim());
    setIsEditing(false);
  }

  return (
    <li className="task-item">
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />

        {isEditing ? (
          <input
            className="edit-input"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        ) : (
          <span className={task.completed ? "task-text completed" : "task-text"}>
            {task.text}
          </span>
        )}
      </div>

      <div className="task-actions">
        {isEditing ? (
          <>
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              Delete
            </button>
          </>
        )}
      </div>
    </li>
  );
}

export default TodoItem;