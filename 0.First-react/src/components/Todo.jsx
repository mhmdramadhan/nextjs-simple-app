import Card from './Card';
import Input from './Input';
import Button from './Button';
import { useState } from 'react';

const Todo = () => {
  const [newTask, setNewTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (e) => {
    e.preventDefault();

    setTasks((prevTasks) => [
      ...prevTasks,
      {
        id: Math.floor(Math.random() * Date.now()),
        name: newTask,
        completed: false,
      },
    ]);
  };

  return (
    <Card>
      <Card.Title></Card.Title>
      <Card.Body>
        <form>
          <div className="item-center flex gap-x-2">
            <Input
              value={newTask}
              onChange={(e) => setNewTask((x) => e.target.value)}
            />
            <Button onClick={handleAddTask} text="Add task" />
          </div>
        </form>
        {tasks.length > 0 && (
          <ol className="space-y-2">
            {tasks.map((data, key) => (
              <li key={key}>{data}</li>
            ))}
          </ol>
        )}
      </Card.Body>
      <Card.Footer>You have {tasks.length} tasks.</Card.Footer>
    </Card>
  );
};

export default Todo;
