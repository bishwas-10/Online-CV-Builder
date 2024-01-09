import fieldReducer from './fieldSlice';
import eduReducer from './eduSlice';
import expeReducer from './expeSlice';
import projectReducer from './projectSlice';
import skillReducer from './skillSlice';
import achieveReducer from './achieveSlice';
import trainingReducer from './trainingSlice';
import awardReducer from './awardSlice';
import { configureStore } from '@reduxjs/toolkit';


export const store = configureStore({
   reducer:{
    field: fieldReducer,
    education: eduReducer,
    experience:expeReducer,
    projects: projectReducer,
    skills:skillReducer,
    achievements:achieveReducer,
    trainings:trainingReducer,
    awards:awardReducer,
   }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch