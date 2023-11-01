import React, { useState } from 'react';
import Todo from '../models/todo';

type ContainerProps = {
  children: React.ReactNode; //👈 children prop typr
};

type TodosContextObj = {
  items: Todo[];
  item: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (text: string) => void;
  onEdit: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  item: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
  editTodo: (text: string) => {},
  onEdit: (id: string) => {},
});

const TodosContextProvider: React.FC<ContainerProps> = (props: ContainerProps) => {
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

  const contextValue: TodosContextObj = {
    items: todos,
    item: todo,
    addTodo: addTodoHandler,
    removeTodo: onDeleteHandler,
    editTodo: editTodoHandler,
    onEdit: onEditHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
