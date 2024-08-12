import React from "react";

export default function TodoCard(props) {
  const { children, handleDeleteTask, index, handleEditTask } = props;
  return (
    <li className="taskItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEditTask(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDeleteTask(index);
          }}
        >
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </li>
  );
}
