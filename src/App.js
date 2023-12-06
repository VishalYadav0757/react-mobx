import React from "react";
import AddTask from "./components/add-task";
import TaskList from "./components/task-list";

const App = () => {
  return (
    <div>
      <h1>&#9776; Task Manager</h1>
      <AddTask />
      <TaskList />
    </div>
  );
};

export default App;
