import './App.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState(["Take dog for a walk", "Take the rubbish out","Fire base is awesome", "react hook is new"])

  return (
    <div className="App">
      <h1>Hello worlds</h1>
      <input />
      <button>Add Todo</button>

      <ul>
        {todos.map(todo=> (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
