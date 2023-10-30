import React, { useState } from 'react';
import Todo from '../models/todo';

const TodoContext = React.createContext<{
  items: Todo[];
  addTodo: () => void;
  removeTodo: (id: string) => void;
}>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
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

  return <TodoContext.Provider>{props.children}</TodoContext.Provider>;
};
