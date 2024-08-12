import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTasks, taskValue, setTaskValue } = props;

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTasks(taskValue);
      setTaskValue("");
    }
  };

  return (
    <header>
      <input
        value={taskValue}
        onChange={(e) => {
          setTaskValue(e.target.value);
        }}
        onKeyDown={handleKeyDown}
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
