import React, { useState, useEffect } from 'react';
import ToDoList from './Components/ToDoList';
import AddToDo from './Components/AddToDo';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const changeFilter = (newFilter) => {
    setFilter(newFilter);
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));
    setDarkMode(savedDarkMode || false);
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [todos, darkMode]);

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <h1>To-Do List</h1>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <div className="filter-buttons">
        <button onClick={() => changeFilter('all')} className={filter === 'all' ? 'active' : ''}>All</button>
        <button onClick={() => changeFilter('active')} className={filter === 'active' ? 'active' : ''}>Active</button>
        <button onClick={() => changeFilter('completed')} className={filter === 'completed' ? 'active' : ''}>Completed</button>
      </div>
      <AddToDo addTodo={addTodo} />
      <ToDoList todos={filteredTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
    </div>
  );
};

export default App;
