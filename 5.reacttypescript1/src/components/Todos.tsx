import React from 'react';

import Todo from '../models/todo';
import TodoItem from './Todo';

const Todos: React.FC<{
  items: Todo[];
  onDeleteTodo: (id: string) => void;
  onEditTodo: (id: string) => void;
}> = (props) => {
  const deleteHandler = (id: string) => {
    props.onDeleteTodo(id);
  };

  return (
    <ul>
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
