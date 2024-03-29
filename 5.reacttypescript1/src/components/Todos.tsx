import React, { useContext } from 'react';

import TodoItem from './Todo';
import { TodosContext } from '../store/todos-context';
import classes from './Todos.module.css';

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          todo={item}
          onDeleteTodo={todosCtx.removeTodo.bind(null, item.id)}
          onEditTodo={todosCtx.onEdit.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
