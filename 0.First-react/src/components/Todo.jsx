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

    setNewTask('');
  };

  const handleCompleteTask = (id) => {
    const updateTask = tasks.map((task) => {
      if (id === task.id) {
        return {
          ...task,
          completed: true,
        };
      }

      return task;
    });

    setTasks(updateTask);
  };

  const handleRemoveTask = (id) => {};

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
          <ol className="space-y-2 mt-4">
            {tasks.map((data, key) => (
              <li key={data.id} className="flex items-center justify-between">
                <span>
                  {data.name} {data.completed ? 'Completed' : 'Incompleted'}
                </span>
                <div className="flex items-center gap-x-2">
                  <button
                    onClick={() => handleCompleteTask(data.id)}
                    className="px-2 py-1 border text-xs"
                  >
                    complete
                  </button>
                  <button
                    onClick={() => handleRemoveTask(data.id)}
                    className="px-2 py-1 border text-xs"
                  >
                    remove
                  </button>
                </div>
              </li>
            ))}
          </ol>
        )}
      </Card.Body>
      <Card.Footer>You have {tasks.length} tasks.</Card.Footer>
    </Card>
  );
};

export default Todo;
