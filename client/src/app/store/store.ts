import fieldReducer from './fieldSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
   reducer:{
    field: fieldReducer
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch