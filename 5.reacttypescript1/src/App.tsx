import Todos from './components/Todos';
import './App.css';
import Todo from './models/todo';

function App() {
  const todos = [
    new Todo('Learn Reactss'),
    new Todo('Learn Typescript'),
  ]

  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
