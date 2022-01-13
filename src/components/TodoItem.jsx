import React from 'react';

function TodoItem(props) {
  const { todo, updateCheckbox } = props;

  const { id, title, completed } = todo;
  function handleCheckbox() {
    updateCheckbox(id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckbox}
      />
      <span>{title}</span>
      <button> DEL </button>
    </li>
  );
}

export default TodoItem;
