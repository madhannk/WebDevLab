import React, { useState } from 'react';

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;
    const newTask = { id: Date.now(), text: task };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2>📝 To-Do List</h2>
      <div style={styles.inputRow}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button style={styles.button} onClick={addTask}>Add</button>
      </div>
      <ul style={styles.list}>
        {tasks.map(t => (
          <li key={t.id} style={styles.listItem}>
            {t.text}
            <button style={styles.deleteBtn} onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '400px',
    margin: '3rem auto',
    textAlign: 'center',
    fontFamily: 'Arial',
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
  },
  input: {
    flex: 1,
    padding: '0.5rem',
  },
  button: {
    padding: '0.5rem 1rem',
    cursor: 'pointer',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    marginTop: '1rem',
  },
  listItem: {
    padding: '0.5rem',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
  },
  deleteBtn: {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: 'red',
  },
};

export default App;
