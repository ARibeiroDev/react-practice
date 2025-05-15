import React from "react";
import Tasks from "./Tasks";

const Content = ({ tasks, handleCheck, handleDelete }) => {
  return (
    <main>
      {tasks.length ? (
        <Tasks
          tasks={tasks}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </main>
  );
};

export default Content;
