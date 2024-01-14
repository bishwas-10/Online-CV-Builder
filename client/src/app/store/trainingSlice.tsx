import { createSlice } from "@reduxjs/toolkit";
import { TTrainingSchema } from "../components/sub-component/trainings/TrainingForm";



const initialState:TTrainingSchema[]=[
 ]

const trainingSlice = createSlice({
    name:'trainings',
    initialState,
    reducers:{
        setTrainingField(state, action){
            
            return [...state, action.payload]
        },
        deleteTrainingField(state,action){
            
          return  state.filter((item)=>item.trainingTitle !== action.payload.trainingTitle)
        },
        setTrainingVisibility(state,action){
           
            return state.map((item)=> item.trainingTitle===action.payload.trainingTitle? { ...item, visibility: true } : item)
        },
        unsetTrainingVisibility(state,action){
           
            return state.map((item)=> item.trainingTitle===action.payload.trainingTitle? { ...item, visibility: false } : item)
        },

    }
})

export const{setTrainingField,deleteTrainingField,}= trainingSlice.actions;

export default trainingSlice.reducer;

