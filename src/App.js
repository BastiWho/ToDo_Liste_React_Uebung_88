import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleTaskAdd = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleTaskToggle = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const handleClearCompleted = () => {
    const uncompletedTasks = tasks.filter((task) => !task.completed);
    setTasks(uncompletedTasks);
  };

  return (
    <div>
      <h1 class="title">Meine Aufgabenliste</h1>
      <input
        type="text"
        value={newTask}
        onChange={handleTaskChange}
        placeholder="Neue Aufgabe eingeben"
      />
      <button onClick={handleTaskAdd}>Aufgabe hinzufügen</button>
      <div>
        {tasks.map((task) => (
          <div key={task.id}>
            <label class="input">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleTaskToggle(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.text}
              </span>
            </label>
          </div>
        ))}
      </div>
      <button onClick={handleClearCompleted}>Erledigte Aufgaben löschen</button>
    </div>
  );
};

export default App;
