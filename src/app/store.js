import {configureStore} from '@reduxjs/toolkit' //Importing to configure the store
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: todoReducer
})