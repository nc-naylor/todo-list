# Simple Todo List

A simple todo list application built with React.js, JavaScript, HTML, and CSS. This application allows user to add, edit, and delete tasks. It also allows the user to toggle between light and dark mode UI preferences. UI preferences and tasks are persisted in the browser's local storage.

## Live Demo

Check out the live version of the Simple Calculator here: [Simple Todo List](https://nc-naylor-todo-list.netlify.app/)

## Features

- **Add Tasks:** Easily add tasks by enter a task in the input field and either pressing the "Enter" key or click the "Add" button.
- **Edit Tasks:** Modify existing tasks by click the edit button.
- **Delete Tasks:** Remove tasks from the list with a single click.
- **Light and Dark Mode:** Allows user to toggle between light and dark mode UI.
- **Persistent Data:** UI preferences and tasks are saved to local storage, so they persist even after the page is refreshed.

## Getting Started

#### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)

### Installation

1. **Clone the repository:**

```bash
  git clone https://github.com/nc-naylor/todo-list.git
  cd todo-list
```

2. **Install dependencies:**

```bash
  npm install
```

3. **Start the development server"**

```base
  npm run dev
```

4. **Open your browser and navigate to:**

```bash
  http://localhost:5173/
```

## Project Structure

- `app.jsx`: Main component that manages the state of tasks and handles the interaction logic.
- `TodoList.jsx`: Renders the list of tasks using the `TodoCard` component.
- `TodoInput.jsx`: Contains the input field and add button for creating new tasks.
- `TodoCard.jsx`: Represents each task with options to edit or delete.
- `DarkModeToggle.jsx`: Implements a button to toggle between light and dark mode UI.
- `main.jsx`: Entry point for the application, rendering the `App` component.
- `index.css`: Styling for the application.

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
