import React from 'react';

import Todo from '../models/todo';
import TodoItem from './Todo';
import classes from './Todos.module.css';

const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string) => void;
}> = (props) => {
  const deleteHandler = (id: string) => {
    props.onDeleteTodo(id);
  };

  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onDeleteTodo={deleteHandler}
          onEditTodo={props.onEditTodo}
        />
      ))}
    </ul>
  );
};

export default Todos;
