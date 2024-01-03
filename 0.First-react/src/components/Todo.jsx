import Card from './Card';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const Todo = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  return (
    <Card>
      <Card.Title></Card.Title>
      <Card.Body>
        <div className="item-center flex gap-x-2">
          <Input />
          <Button text="Add task" />
        </div>
      </Card.Body>
      <Card.Footer>You have 5 tasks.</Card.Footer>
    </Card>
  );
};

export default Todo;
