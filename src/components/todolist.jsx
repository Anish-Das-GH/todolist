import React, { useState, useEffect } from 'react';
import './todolist.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [sortOption, setSortOption] = useState('all');
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    } else {
      alert('Please enter a task.');
    }
  };

  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const startEditing = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const editTask = (e, index) => {
    e.preventDefault();
    if (editText.trim()) {
      const updatedTasks = tasks.map((task, i) =>
        i === index ? { ...task, text: editText } : task
      );
      setTasks(updatedTasks);
      setEditIndex(null);
      setEditText('');
    } else {
      alert('Please enter a task.');
    }
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredTasks = tasks.filter((task) => {
    if (sortOption === 'completed') return task.completed;
    if (sortOption === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <div className="sort-by">
        <label>Sort by:</label>
        <select className='selecto' value={sortOption} onChange={handleSortChange}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </div>
      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            {editIndex === index ? (
              <form onSubmit={(e) => editTask(e, index)}>
                <input className='edit'
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button type="submit">Save</button>
              </form>
            ) : (
              <>
                <span onClick={() => toggleComplete(index)}>{task.text}</span>
                <div>
                  <button onClick={() => startEditing(index, task.text)}>Edit</button>
                  <button onClick={() => removeTask(index)}>Remove</button>
                  <button onClick={() => toggleComplete(index)}>
                    {task.completed ? 'Undo Complete' : 'Complete'}
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
