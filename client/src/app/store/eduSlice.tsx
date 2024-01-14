import { createSlice } from "@reduxjs/toolkit";
import { TEducationSchema } from "../components/sub-component/education/EducationForm";



const initialState:TEducationSchema[]=[
 ]

const eduSlice = createSlice({
    name:'education',
    initialState,
    reducers:{
        setEducationField(state, action){
            return [...state, action.payload]
        },
        deleteEducationField(state,action){
            
          return  state.filter((item)=>item.school !== action.payload.school)
        },
        setEduVisibility(state,action){
           
            return state.map((item)=> item.school===action.payload.school? { ...item, visibility: true } : item)
        },
        unsetEduVisibility(state,action){
           
            return state.map((item)=> item.school===action.payload.school? { ...item, visibility: false } : item)
        },

    }
})

export const{setEducationField,deleteEducationField}= eduSlice.actions;

export default eduSlice.reducer;

