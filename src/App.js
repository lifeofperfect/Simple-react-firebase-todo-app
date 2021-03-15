import './App.css';
import { useState, useEffect } from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState("");
  // console.log(input);

  //this loads once the app loads i.e it loads once
  useEffect(()=> {
    //this code fires when app.js loads
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=> {
      setTodos(snapshot.docs.map(doc=>({id:doc.id, todo:doc.data().todo})))
    })
  }, [])

  const addTodo=(e)=> {
    // e.preventDefault(); //stops referesh
    // console.log(input);
    // setTodos([...todos, input]) //set todos
    // setInput(""); //clear out the input stage
    e.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput("");
    
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
          <Todo text={todo}/>
        ))}
      </ul>
    </div>
  );
}

export default App;
