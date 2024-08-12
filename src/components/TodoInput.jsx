import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTasks, taskValue, setTaskValue } = props;

  return (
    <header>
      <input
        value={taskValue}
        onChange={(e) => {
          setTaskValue(e.target.value);
        }}
        type="text"
        placeholder="Enter task"
      />
      <button
        onClick={() => {
          handleAddTasks(taskValue);
          setTaskValue("");
        }}
      >
        Add
      </button>
    </header>
  );
}
