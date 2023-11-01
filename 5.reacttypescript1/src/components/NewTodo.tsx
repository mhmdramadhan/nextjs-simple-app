import React, { useContext } from 'react';

import { TodosContext } from '../store/todos-context';
import { useRef } from 'react';
import clasess from './NewTodo.module.css';

const NewTodo: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const isUpdated = todosCtx.item.length === 0 ? false : true;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    if (!isUpdated) {
      todosCtx.addTodo(enteredText);
    } else {
      todosCtx.editTodo(enteredText);
    }
  };

  return (
    <form onSubmit={submitHandler} className={clasess.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>{!isUpdated ? 'Simpan' : 'Update'}</button>
    </form>
  );
};

export default NewTodo;
