import {createSlice,nanoid} from '@reduxjs/toolkit'; //Importing createSlice from '@reduxjs/


//creating a initai State
const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo);
            console.log(state);
        },
        removeTodo:(state,action)=>{
            console.log('todo array',state.todos);
            const newTodo=state.todos.filter((todo)=>
                todo.id!==action.payload
            )
            state.todos = newTodo
            console.log(newTodo);
        },
    }
})

//These are individual reducers
export const {addTodo,removeTodo} = todoSlice.actions

//This is complete reducer
export default todoSlice.reducer