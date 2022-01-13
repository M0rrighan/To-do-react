import React from 'react';

function TodoItem(props) {
  const { todo, updateCheckbox, deleteItem } = props;
  const { id, title, completed } = todo;

  function handleCheckbox() {
    updateCheckbox(id);
  }

  function deleteItm() {
    deleteItem(id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckbox}
      />
      <span>{title}</span>
      <button onClick={deleteItm}>DEL</button>
    </li>
  );
}

export default TodoItem;
