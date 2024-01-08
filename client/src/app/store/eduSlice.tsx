import { createSlice } from "@reduxjs/toolkit";
import { TEducationSchema } from "../components/EducationForm";



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
        }
    }
})

export const{setEducationField,deleteEducationField}= eduSlice.actions;

export default eduSlice.reducer;

