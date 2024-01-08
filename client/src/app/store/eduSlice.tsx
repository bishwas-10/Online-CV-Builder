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
        setVisibility(state,action){
            return state.map((item)=> item.school===action.payload? { ...item, visibility: true } : item)
        }
    }
})

export const{setEducationField,deleteEducationField,setVisibility}= eduSlice.actions;

export default eduSlice.reducer;

