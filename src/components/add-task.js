import React, { useState } from "react";
import { observer } from "mobx-react";
import taskStore from "../stores/task-store";
import "./index.css";

const AddTask = observer(() => {
  const [taskName, setTaskName] = useState("");

  const handleAddTask = () => {
    if (taskName.trim() !== "") {
      taskStore.addTask(taskName);
      setTaskName("");
    } else {
      alert("Please enter a task title !!");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        className="task-input"
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="enter task name..."
      />
      <button className="add-btn" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
});

export default AddTask;
