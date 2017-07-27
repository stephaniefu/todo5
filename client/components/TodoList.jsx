import React from 'react';
import TodoEntry from './TodoEntry.jsx';

const TodoList = ({ todos, handleOnDelete }) => {
  return (
    <div>
      <ul>
        {todos.map((todo, i) => {
          return <TodoEntry todo={todo.item} i={i} handleOnDelete={handleOnDelete} /> 
        })}
      </ul>
    </div>
  );
};

export default TodoList;