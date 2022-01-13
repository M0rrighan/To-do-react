import React from 'react';
import TodoItem from './TodoItem';

function TodoList(props) {
  const { todos, updateCheckbox, deleteItem } = props;

  const items = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      updateCheckbox={updateCheckbox}
      deleteItem={deleteItem}
    />
  ));

  return (
    <div>
      {items}
    </div>
  );
}

export default TodoList;
