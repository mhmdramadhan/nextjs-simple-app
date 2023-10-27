import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [todo, setTodo] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    // inialisasi todo baru
    const newTodo = new Todo(todoText);

    // simpan todo baru ke array todos
    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const editTodoHandler = (todoText: string) => {
    const id = todo[0].id;

    const newTodos = todos.map((item) => {
      if (item.id === id) {
        return { ...item, text: todoText };
      }

      return item;
    });

    setTodos(newTodos);
    setTodo([]);
  };

  const onDeleteHandler = (id: string) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const onEditHandler = (id: string) => {
    setTodo(todos.filter((item) => item.id === id));
  };

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
