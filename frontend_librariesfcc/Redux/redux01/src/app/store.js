import {configureStore} from '@reduxjs/toolkit';
//pehla kaam hai configure store ko import kr lo kaha  se redux toolkit se 
import todoReducer from '../features/todo/todoSlice'
export const store=configureStore({
    reducer: todoReducer
})//max cheeze yaha object hi lete hai 
//next step hai reducer banana hai


