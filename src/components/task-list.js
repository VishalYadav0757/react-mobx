import React from "react";
import { observer } from "mobx-react";
import taskStore from "../stores/task-store";
import "./index.css";

const TaskList = observer(() => {
  const handleRemoveTask = (index) => {
    taskStore.removeTask(index);
  };

  return (
    <div>
      <ul className="list-wrpr">
        {taskStore?.tasks?.map((task, index) => (
          <li key={index} className="task-list">
            <span>&#9900;</span>
            <div className="task-title">{task}</div>
            <button
              className="delete-btn"
              onClick={() => handleRemoveTask(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default TaskList;
