import React from "react";
import TodoCard from "./TodoCard";

export default function TodoList(props) {
  const { tasks } = props;
  return (
    <ul className="main">
      {tasks.map((task, todoIndex) => {
        return (
          <TodoCard key={todoIndex}>
            <p>{task}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
}
