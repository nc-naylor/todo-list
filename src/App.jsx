import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(newTask) {
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  }

  function handleDeleteTask(index) {
    const newTaskList = tasks.filter((task, taskIndex) => {
      return taskIndex !== index;
    });
    setTasks(newTaskList);
  }

  return (
    <>
      <TodoInput handleAddTasks={handleAddTask} />
      <TodoList handleDeleteTask={handleDeleteTask} tasks={tasks} />
    </>
  );
}

export default App;
