import React from "react";
import TaskItem from "./TaskItem";

const Tasks = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default Tasks;
