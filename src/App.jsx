import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTasks(newTask) {
    const newTaskList = [...tasks, newTask];
    setTasks(newTaskList);
  }
  return (
    <>
      <TodoInput handleAddTasks={handleAddTasks} />
      <TodoList tasks={tasks} />
    </>
  );
}

export default App;
