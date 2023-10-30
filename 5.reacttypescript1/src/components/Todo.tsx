import React from 'react';
import TodoItem from '../models/todo';
import clasess from './Todo.module.css'

const Todo: React.FC<{
  todo: TodoItem;
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string) => void;
}> = (props) => {
  const onDeleteHandler = (id: string) => {
    props.onDeleteTodo(id);
  };

  return (
    <li key={props.todo.id} className={clasess.item}>
      {props.todo.text}
      <button className={clasess.btnPrime} onClick={() => props.onEditTodo(props.todo.id)}>Edit</button>
      <button className={clasess.btnDanger} onClick={() => onDeleteHandler(props.todo.id)}>Hapus</button>
    </li>
  );
};

export default Todo;
