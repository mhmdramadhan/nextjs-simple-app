import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  

  return (
    <div>
      <NewTodo
        onAddTodo={addTodoHandler}
        onEditTodo={editTodoHandler}
        isUpdate={todo}
      />
      <Todos
        onDeleteTodo={onDeleteHandler}
        items={todos}
        onEditTodo={onEditHandler}
      />
    </div>
  );
}

export default App;
