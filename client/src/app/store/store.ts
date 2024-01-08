import fieldReducer from './fieldSlice';
import eduReducer from './eduSlice';
import expeReducer from './expeSlice'
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
   reducer:{
    field: fieldReducer,
    education: eduReducer,
    experience:expeReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch