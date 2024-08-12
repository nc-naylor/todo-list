import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState([""]);

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

  function handleEditTask(index) {
    const valueToBeEdited = tasks[index];
    setTaskValue(valueToBeEdited);
    handleDeleteTask(index);
  }

  return (
    <>
      <TodoInput
        taskValue={taskValue}
        setTaskValue={setTaskValue}
        handleAddTasks={handleAddTask}
      />
      <TodoList
        handleEditTask={handleEditTask}
        handleDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </>
  );
}

export default App;
