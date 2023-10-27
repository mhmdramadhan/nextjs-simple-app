import React from 'react';
import TodoItem from '../models/todo';

const Todo: React.FC<{
  todo: TodoItem;
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string) => void;
}> = (props) => {
  const onDeleteHandler = (id: string) => {
    props.onDeleteTodo(id);
  };

  return (
    <li key={props.todo.id}>
      {props.todo.text}
      <button onClick={() => props.onEditTodo(props.todo.id)}>Edit</button>
      <button onClick={() => onDeleteHandler(props.todo.id)}>Hapus</button>
    </li>
  );
};

export default Todo;
