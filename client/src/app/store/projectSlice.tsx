import { createSlice } from "@reduxjs/toolkit";
import { TProjectSchema } from "../components/sub-component/projects/ProjectForm";



const initialState:TProjectSchema[]=[
 ]

const projectSlice = createSlice({
    name:'projects',
    initialState,
    reducers:{
        setProjectField(state, action){
            return [...state, action.payload]
        },
        deleteProjectField(state,action){
          return  state.filter((item)=>item.projectTitle !== action.payload.projectTitle)
        },
        setProjectVisibility(state,action){
            return state.map((item)=> item.projectTitle===action.payload.projectTitle? { ...item, visibility: true } : item)
        }
        ,
        unsetProjectVisibility(state,action){
            return state.map((item)=> item.projectTitle===action.payload.projectTitle? { ...item, visibility: false } : item)
        }
    }
})

export const{setProjectField,deleteProjectField,}= projectSlice.actions;

export default projectSlice.reducer;

