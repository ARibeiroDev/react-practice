import React from "react";
import { FaTrashCan } from "react-icons/fa6";

const TaskItem = ({ task, handleCheck, handleDelete }) => {
  return (
    <li className="task">
      <input
        type="checkbox"
        onChange={() => handleCheck(task.id)}
        checked={task.checked}
      />
      <label
        style={task.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handleCheck(task.id)}
      >
        {task.task}
      </label>
      <FaTrashCan
        onClick={() => handleDelete(task.id)}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${task.task}`}
      />
    </li>
  );
};

export default TaskItem;
