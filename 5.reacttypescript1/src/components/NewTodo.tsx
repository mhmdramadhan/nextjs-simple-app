import React from 'react';
import { useRef } from 'react';
import Todo from '../models/todo';

const NewTodo: React.FC<{
  onAddTodo: (text: string) => void;
  onEditTodo: (text: string) => void;
  isUpdate: Todo[];
}> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const isUpdated = props.isUpdate.length === 0 ? false : true;

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    if (!isUpdated) {
      props.onAddTodo(enteredText);
    } else {
      props.onEditTodo(enteredText);
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>{!isUpdated ? 'Simpan' : 'Update'}</button>
    </form>
  );
};

export default NewTodo;
