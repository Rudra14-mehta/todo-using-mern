import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [time, setTime] = useState("");
  const [todos, setTodos] = useState([]);
  const [theme, setTheme] = useState("light");

  // Load todos from localStorage on component mount
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  // Save todos to localStorage whenever todos change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (task.trim() !== "") {
      const newTodo = {
        id: Date.now(),
        task: task.trim(),
        time: time || "No time set",
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTodos([...todos, newTodo]);
      setTask("");
      setTime("");
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Sort todos by time (if time is set) and completion status
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed !== b.completed) {
      return a.completed ? 1 : -1;
    }
    if (a.time === "No time set" && b.time === "No time set") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (a.time === "No time set") return 1;
    if (b.time === "No time set") return -1;
    return a.time.localeCompare(b.time);
  });

  return (
    <div className={`app ${theme}`}>
      <div className="header">
        <h1>Todo App</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
      
      <div className="input-section">
        <div className="input-group">
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task..."
            onKeyPress={(e) => e.key === "Enter" && handleAdd()}
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="time-input"
          />
        </div>
        <button onClick={handleAdd} className="add-btn">
          Add Task
        </button>
      </div>

      <div className="stats">
        <span>Total: {todos.length}</span>
        <span>Completed: {todos.filter(t => t.completed).length}</span>
        <span>Pending: {todos.filter(t => !t.completed).length}</span>
      </div>

      <ul className="todo-list">
        {sortedTodos.map((todo) => (
          <li key={todo.id} className={todo.completed ? "completed" : ""}>
            <div className="todo-content">
              <button 
                className="complete-btn"
                onClick={() => handleToggleComplete(todo.id)}
              >
                {todo.completed ? "✓" : "○"}
              </button>
              <div className="todo-text">
                <span className="task-text">{todo.task}</span>
                <span className="time-text">⏰ {todo.time}</span>
              </div>
            </div>
            <button 
              onClick={() => handleDelete(todo.id)}
              className="delete-btn"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 && (
        <div className="empty-state">
          <p>No tasks yet! Add your first todo above.</p>
        </div>
      )}
    </div>
  );
}

export default App;
