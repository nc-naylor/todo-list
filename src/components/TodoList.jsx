import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { tasks } = props;
  return (
    <ul className="main">
      {tasks.map((task, taskIndex) => {
        return (
          <TodoCard {...props} key={taskIndex} index={taskIndex}>
            <p>{task}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
