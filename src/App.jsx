import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskValue, setTaskValue] = useState([""]);

  function persistData(newList) {
    localStorage.setItem("tasks", JSON.stringify({ tasks: newList }));
  }

  function handleAddTask(newTask) {
    const newTaskList = [...tasks, newTask];
    persistData(newTaskList);
    setTasks(newTaskList);
  }

  function handleDeleteTask(index) {
    const newTaskList = tasks.filter((task, taskIndex) => {
      return taskIndex !== index;
    });
    persistData(newTaskList);
    setTasks(newTaskList);
  }

  function handleEditTask(index) {
    const valueToBeEdited = tasks[index];
    setTaskValue(valueToBeEdited);
    handleDeleteTask(index);
  }

  useEffect(() => {
    if (!localStorage) {
      return;
    }
    let localTasks = localStorage.getItem("tasks");
    if (!localTasks) {
      return;
    }
    localTasks = JSON.parse(localTasks).tasks;
    setTasks(localTasks);
  }, []);

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
