import React from 'react'
import { useState } from 'react';
import {useDispatch} from 'react-redux'
import {addTodo} from "../features/todo/todoSlice"
function AddTodo() {
    const [todo, setTodo] = useState('');
    const dispatch = useDispatch()
    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(todo));

    }
    
  return (
    <>
     <h2>Add Todo</h2>
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        value={todo}
        onChange={(e)=>setTodo(e.target.value)}
        placeholder="Enter your todo"
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '250px',
          marginRight: '10px',
        }}
      />
      <button
        type="submit"
        style={{
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Todo
      </button>
    </form></>
   
  )
}

export default AddTodo