/* eslint-disable no-param-reassign */
import React, { useState } from 'react';
import Header from './Header';
import InputTodo from './InputTodo';
import TodoList from './TodoList';
import '../App.css';

function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const updateCheckbox = (id) => {
    setTodos((prevState) => prevState.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo, completed: !todo.completed,
        };
      }
      return todo;
    }));
  };

  const updateTitle = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => todo.id !== id),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: [...todos].length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="container">
      <div className="inner">
        <Header />
        <InputTodo addTodoItem={addTodoItem} />
        <TodoList
          todos={todos}
          updateCheckbox={updateCheckbox}
          updateTitle={updateTitle}
          deleteItem={delTodo}
        />
      </div>
    </div>
  );
}

export default TodoContainer;
