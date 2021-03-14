import './App.css';
import { useState } from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';

function App() {
  const [todos, setTodos] = useState(["Take dog for a walk", "Take the rubbish out","Fire base is awesome", "react hook is new"])
  const [input, setInput] = useState("");
  console.log(input);

  const addTodo=(e)=> {
    e.preventDefault(); //stops referesh
    console.log(input);
    setTodos([...todos, input]) //set todos
    setInput(""); //clear out the input stage
    
  }

  return (
    <div className="App">
      <h1>Hello worlds</h1>
      <form>
        
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input value={input} onChange={event=> setInput(event.target.value)}/>
        </FormControl>

        <Button 
          variant="contained" 
          color="primary"
          onClick={addTodo}
          disabled={!input}
          >
          Add Todo
        </Button>

        {/* <button onClick={addTodo}>Add Todo</button> */}
      </form>

      <ul>
        {todos.map(todo=> (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
