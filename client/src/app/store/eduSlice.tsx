import { createSlice } from "@reduxjs/toolkit";
import { TEducationSchema } from "../components/EducationForm";



const initialState:TEducationSchema[]=[{
    school:'',
    degree:'',
    city:'',
    startDate:'',
    endDate:'',
    description:'',
},]

const eduSlice = createSlice({
    name:'education',
    initialState,
    reducers:{
        setEducationField(state, action){
            return [...state, action.payload]
        }
    }
})

export const{setEducationField}= eduSlice.actions;

export default eduSlice.reducer;

