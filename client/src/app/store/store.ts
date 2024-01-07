import fieldReducer from './fieldSlice';
import eduReducer from './eduSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
   reducer:{
    field: fieldReducer,
    education: eduReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch