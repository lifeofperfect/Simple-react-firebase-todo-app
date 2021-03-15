import React, {useState} from 'react'
import {Button, List, ListItem, ListItemAvatar,ListItemText, Modal} from '@material-ui/core';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import './Todo.css'
import db from './firebase'

function Todo(props) {
    const [open, setOpen] = useState(false);

    
    return (
        
        <>
        
       <List className="todo__list">
           <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text.todo} secondary={props.text.todo} />
           </ListItem>
           <button onClick={e=> setOpen(true)}>Edit</button>
           <DeleteForeverIcon onClick={event=> db.collection('todos').doc(props.text.id).delete()}></DeleteForeverIcon>
       </List>
       </>
       
    )
}

export default Todo
