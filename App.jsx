import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      id: Date.now(),
      name: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  };

  // Complete Task
  const completeTask = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed: !item.completed
        };
      }
      return item;
    });

    setTasks(updatedTasks);
  };

  // Delete Task
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">

      <div className="container">

        <h1>TO-DO-List</h1>

        <p className="subtitle">
          Manage your daily tasks easily
        </p>

        <div className="input-section">

          <input
            type="text"
            placeholder="Enter your task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />

          <button onClick={addTask}>
            Add Task
          </button>

        </div>

        <div className="task-container">

          {tasks.length === 0 ? (
            <p className="empty">
              No tasks available
            </p>
          ) : (
            tasks.map((item) => (

              <div className="task" key={item.id}>

                <span
                  className={item.completed ? "completed" : ""}
                  onClick={() => completeTask(item.id)}
                >
                  {item.name}
                </span>

                <div>
                  <button
                    className="complete-btn"
                    onClick={() => completeTask(item.id)}
                  >
                    {item.completed ? "Undo" : "Done"}
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => deleteTask(item.id)}
                  >
                    Delete
                  </button>
                </div>

              </div>

            ))
          )}

        </div>

        <div className="footer">
          Total Tasks: {tasks.length}
        </div>

      </div>

    </div>
  );
}

export default App;