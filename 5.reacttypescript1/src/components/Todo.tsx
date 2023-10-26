import React from 'react';
import TodoItem from '../models/todo';

const Todo: React.FC<{ todo: TodoItem }> = (props) => {
  return <li key={props.todo.id}>{props.todo.text}</li>;
};

export default Todo;
