import React from 'react';

const TodoEntry = ({ todo, i, handleOnDelete }) => {
  return (
    <div>
      <li onClick={() => handleOnDelete(todo, i)}>
        {/* {console.log(todo)} */}
        {todo}
      </li>
    </div>
  );
};

export default TodoEntry;