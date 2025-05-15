import React from "react";
import { FaPlus } from "react-icons/fa6";
import { useRef } from "react";

const AddTask = ({ newTask, setNewTask, handleSubmit }) => {
  const inputRef = useRef();
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addTask">New Task</label>
      <input
        autoFocus
        ref={inputRef}
        id="addTask"
        type="text"
        placeholder="Add New Task"
        required
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add New Task"
        onClick={() => inputRef.current.focus()}
      >
        <FaPlus />
      </button>
    </form>
  );
};

export default AddTask;
