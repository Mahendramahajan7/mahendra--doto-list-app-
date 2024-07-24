import React from 'react';

const ToDoItem = ({ todo, toggleComplete, deleteTodo }) => {
    return (
        <div className="todo-item">
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                {todo.text}
            </span>
            <div className="todo-buttons">
                <button onClick={() => toggleComplete(todo.id)}>Complete</button>
                <button className="delete" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
        </div>
    );
};

export default ToDoItem;
