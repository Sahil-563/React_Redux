import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

 console.log(todos, 'todos');

  return (
    <>
      {todos.map((todo) => (
        <ul  style={{ listStyle: 'none', padding: '0', marginBottom: '10px', borderBottom: '1px solid #ccc' }}>
          <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px' }}>
            <span style={{ marginRight: '10px' }}>Task: {todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              style={{
                backgroundColor: '#ff6f61',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                padding: '8px',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        </ul>
      ))}
    </>
  );
}

export default Todo;
