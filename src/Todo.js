import React from 'react'
import {Button, List, ListItem, ListItemAvatar,ListItemText} from '@material-ui/core';
import './Todo.css'
import db from './firebase'

function Todo(props) {
    return (
       <List className="todo__list">
           <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary={props.text.todo} secondary={props.text.todo} />
           </ListItem>
           <Button onClick={event=> db.collection('todos').doc(props.text.id).delete()}>Delete me</Button>
       </List>
       
    )
}

export default Todo
