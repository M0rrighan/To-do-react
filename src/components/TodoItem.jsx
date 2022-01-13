import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const { todo, updateCheckbox, deleteItem } = props;
  const { id, title, completed } = todo;

  function handleCheckbox() {
    updateCheckbox(id);
  }

  function deleteItm() {
    deleteItem(id);
  }

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  return (
    <li className={styles.item}>
      <input
        type="checkbox"
        checked={completed}
        onChange={handleCheckbox}
        className={styles.checkbox}
      />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>
      <button onClick={deleteItm}>DEL</button>
    </li>
  );
}

export default TodoItem;
